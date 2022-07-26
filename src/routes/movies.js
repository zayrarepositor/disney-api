import { Router } from "express";
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controller.js";
const movies = Router();

//list of specific movie or all movies
movies.get("/", getAllMovies);
// create a movie
movies.post("/", createMovie);
// edit a movie
movies.put("/:id", updateMovie);
// delete a movie
movies.delete("/:id", deleteMovie);

export default movies;
