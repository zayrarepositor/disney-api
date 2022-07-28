import { Router } from "express";

import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";
import { verifyToken } from "../middleware/authtoken.js";

const users = Router();

// user is created in auth route

// list of all users
users.get("/", getAllUsers);
// edit a character
users.put("/:id", verifyToken, updateUser);
// delete a character
users.delete("/:id", verifyToken, deleteUser);

export default users;
