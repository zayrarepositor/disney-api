import { Router } from "express";
import {
  getAllGenres,
  createGenre,
  updateGenre,
  deleteGenre,
} from "../controllers/genres.controller.js";
const genres = Router();

// get all genres (image, title, date)
genres.get("/", getAllGenres);
// create a genre
genres.post("/", createGenre);
// edit a genre
genres.put("/:id", updateGenre);
// delete a genre
genres.delete("/:id", deleteGenre);

export default genres;
