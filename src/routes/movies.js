import { Router } from "express";
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controller.js";
const movies = Router();

//list of specific movie or all movies
movies.get("/movies", getAllMovies);
// create a movie
movies.post("/movies", createMovie);
// edit a movie
movies.put("/movies/:id", updateMovie);
// delete a movie
movies.delete("/movies/:id", deleteMovie);

export default movies;
