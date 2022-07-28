import jwt from "jsonwebtoken";
import config from "../config.js";
import { User } from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    //from header
    const token = req.headers["access-token"];
    if (token) {
      //extraigo id del token
      const userInToken = jwt.verify(token, config.SECRET);
      const matchedUser = await User.findByPk(userInToken.id);
      if (matchedUser) {
        next();
      } else {
        res.status(404).json({ msg: "user not found" });
      }
    } else {
      res.status(403).json({ msg: "token not found" });
    }
  } catch (error) {
    res.status(401).json({ msg: "access-token is required" });
  }
};
