import { Router } from "express";

import {
  getAllCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characters.controller.js";
const characters = Router();

//list of specific character or all characters
characters.get("/", getAllCharacters);
// create a character
characters.post("/", createCharacter);
// edit a character
characters.put("/:id", updateCharacter);
// delete a character
characters.delete("/:id", deleteCharacter);

export default characters;
