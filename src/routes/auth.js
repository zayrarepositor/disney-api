import { Router } from "express";
const auth = Router();
import { register, login } from "../controllers/auth.controller.js";

//SIGN UP / REGISTER
auth.post("/register", register);
//SIGN IN /O LOGIN
auth.post("/login", login);

export default auth;
