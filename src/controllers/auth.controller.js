import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config.js";

// Create roles when server is on
export const createRoles = async () => {
  try {
    const matchedRoles = await Role.findAll();
    if (matchedRoles.length < 1) {
      const rolesCreated = await Role.bulkCreate([
        { rolename: "admin" },
        { rolename: "user" },
        { rolename: "moderator" },
      ]);
    }
  } catch (error) {
    console.error(error);
  }
};

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
        } else await newUser.addRole(matchedRole);
      } else {
        const defaultRole = await Role.findOne({
          where: {
            rolename: "user",
          },
        });
        await newUser.addRole(defaultRole);
      }

      //token
      const token = jwt.sign({ id: newUser.id }, config.SECRET, {
        expiresIn: 86400, //24hs
      });

      res.status(201).json({ msg: "signup", newUser, token });
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

        res.status(200).json({ msg: "signin", matchedUser, token });
      } else {
        res.status(400).json("sorry, incorrect password");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
