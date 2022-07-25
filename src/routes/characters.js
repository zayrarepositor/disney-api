import { Router } from "express";

import {
  getAllCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characters.controller.js";
const characters = Router();

//list of specific character or all characters
characters.get("/characters", getAllCharacters);
// create a character
characters.post("/characters", createCharacter);
// edit a character
characters.put("/characters/:id", updateCharacter);
// delete a character
characters.delete("/characters/:id", deleteCharacter);

export default characters;
