import { Router } from "express";

import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";
const users = Router();

// user is created in auth route

// list of all users
users.get("/", getAllUsers);
// edit a character
users.put("/:id", updateUser);
// delete a character
users.delete("/:id", deleteUser);

export default users;
