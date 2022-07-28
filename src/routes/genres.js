import { Router } from "express";
import {
  getAllGenres,
  createGenre,
  updateGenre,
  deleteGenre,
} from "../controllers/genres.controller.js";
import { verifyToken } from "../middleware/authtoken.js";
const genres = Router();

// get all genres (image, title, date)
genres.get("/", getAllGenres);
// create a genre
genres.post("/", verifyToken, createGenre);
// edit a genre
genres.put("/:id", verifyToken, updateGenre);
// delete a genre
genres.delete("/:id", verifyToken, deleteGenre);

export default genres;
