import { Router } from "express";
import {
  getAllGenres,
  createGenre,
  updateGenre,
  deleteGenre,
} from "../controllers/genres.controller.js";
const genres = Router();


// get all genres (image, title, date)
genres.get("/genres", getAllGenres);
// create a genre
genres.post("/genres", createGenre);
// edit a genre
genres.put("/genres/:id", updateGenre);
// delete a genre
genres.delete("/genres/:id", deleteGenre);

export default genres;
