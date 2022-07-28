import { Router } from "express";
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controller.js";
import { verifyToken } from "../middleware/authtoken.js";

const movies = Router();

//list of specific movie or all movies
movies.get("/", getAllMovies);
// create a movie
movies.post("/", verifyToken, createMovie);
// edit a movie
movies.put("/:id", verifyToken, updateMovie);
// delete a movie
movies.delete("/:id", verifyToken, deleteMovie);

export default movies;
