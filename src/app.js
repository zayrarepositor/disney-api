import express from "express";
//ROUTES
import genres from "./routes/genres.js";
import movies from "./routes/movies.js";
import characters from "./routes/characters.js";

// INITIALIZATION
const app = express();

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use(genres);
app.use(movies);
app.use(characters);
app.get("*", (req, res) =>
  res.status(200).send({ msg: "Welcome Disney Api - by Zayra Velasco" })
);
export default app;
