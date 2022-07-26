import express from "express";
//CONSOLE MESSAGES
import morgan from "morgan";
//import projectInfo from "../package.json";

//IMPORT FOR ROUTES
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import genres from "./routes/genres.js";
import movies from "./routes/movies.js";
import characters from "./routes/characters.js";
import { createRoles } from "./controllers/auth.controller.js";
// INITIALIZATION
const app = express();
createRoles();
//SAVE VARIABLE
//app.set("projectInfo", projectInfo);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

//ROUTES
app.use("/auth", auth);
app.use("/users", users);
app.use("/genres", genres);
app.use("/movies", movies);
app.use("/characters", characters);
app.get("*", (req, res) =>
  res.status(200).json({
    msg: "Welcome!!",
    project: "Disney Api",
    author: "Zayra Velasco",
    description: "backend project with node, express, postgress",
    version: "1.0.0",
    /* description: app.get("projectInfo").description,
    version: app.get("projectInfo").version, */
  })
);
export default app;
