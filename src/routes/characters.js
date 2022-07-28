import { Router } from "express";

import {
  getAllCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characters.controller.js";
import { verifyToken } from "../middleware/authtoken.js";
const characters = Router();
//list of specific character or all characters
characters.get("/", getAllCharacters);
// create a character
characters.post("/", verifyToken, createCharacter);
// edit a character
characters.put("/:id", verifyToken, updateCharacter);
// delete a character
characters.delete("/:id", verifyToken, deleteCharacter);

export default characters;
