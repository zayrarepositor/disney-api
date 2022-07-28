import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config.js";
import nodemailer from "nodemailer";

//const { MAIL, PASSWORD } = process.env;
/* hotmail
feliz_87@hotmail.es
Contrasena
zmvr153772784 
Hotmail 	Servidor: smtp.live.com	Authentication:  	TLS	Puerto:587
Googlemail - Gmail  Servidor:	smtp.gmail.com Authentication:  	TLS o  SSL Puerto 25 o 587 o 465
SMTP Servidor 
*/

// Encryp Password
const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
// Boolean
const comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

// Sign up
export const register = async (req, res) => {
  try {
    const { username, email, password, rolename } = req.body;

    const matchedUser = await User.findOne({
      where: {
        email,
      },
    });

    if (matchedUser === null) {
      const emailRegExp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (emailRegExp.test(email)) {
        const encrypted = await encryptPassword(password);

        const newUser = await User.create({
          username,
          email,
          password: encrypted,
        });

        if (rolename) {
          const matchedRole = await Role.findOne({
            where: {
              rolename,
            },
          });
          if (matchedRole === null) {
            res.status(400).json({ msg: "role non-existent" });
          } else await newUser.setRole(matchedRole);
        } else {
          const defaultRole = await Role.findOne({
            where: {
              rolename: "user",
            },
          });
          await newUser.setRole(defaultRole);
        }

        // TOKEN
        const token = jwt.sign({ id: newUser.id }, config.SECRET, {
          expiresIn: 86400, //24hs
        });

        // MAILING:NODEMAILER TRANSPORTER
        const transporter = nodemailer.createTransport({
          service: "Outlook365",
          host: "smtp.live.com", //"smtp.gmail.com",
          port: 587, //465 for gmail
          secure: false, // true for 465, false for other ports
          auth: {
            user: "feliz_87@hotmail.es",
            pass: "zmvr153772784",
          },
          tls: {
            ciphers: "SSLv3", //for outlook
            rejectUnauthorized: false, // do not fail on invalid certs
          },
          logger: true,
          // transactionLog: true, // include SMTP traffic in the logs
          allowInternalNetworkInterfaces: false,
        });

        const contentHTML = `<h1>Hello ${username}!!</h1>
    <p>You have successful sign in from Disney Api.</p>
    <p>
      Your token is ready!! Remember you will need it for all the
      POST/PUT/DELETE requests.
    </p>
    <h5>Header name: access-token</h5>
    <h5>Subject:${token}</h5>
    <p >Save it!</p>
    <h2>Greetings!</h2>`;

        const mailOptions = {
          from: "'DisneyApi' <feliz_87@hotmail.es>",
          to: email,
          subject: "Welcome to Disney Api",
          html: contentHTML,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error.message);
            return process.exit(1);
          } else {
            transporter.close();
          }
        });

        res.status(201).json({
          msg: "Registration done! You are sign up",
          newUser,
          token,
          mailerMsg: `Check ${email} for confirmation and token copy`,
        });
      } else {
        res.status(400).json("sorry, invalid email");
      }
    } else {
      res.status(400).json("sorry, a user is registered with this mail");
    }
  } catch (error) {
    console.error(error);
  }
};

// Sign in
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const matchedUser = await User.findOne({
      where: {
        email,
      },
    });
    if (matchedUser === null) {
      res.status(400).json("sorry, user not found");
    } else {
      const matchedPassword = await comparePassword(
        password,
        matchedUser.password
      );
      if (matchedPassword) {
        //token
        const token = jwt.sign({ id: matchedUser.id }, config.SECRET, {
          expiresIn: 86400, //24hs
        });

        res
          .status(200)
          .json({ msg: "Log in done! You are sign in", matchedUser, token });
      } else {
        res.status(400).json("sorry, incorrect password");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
