import { Genre } from "../models/Genre.js";
import { Movie } from "../models/Movie.js";
import { Character } from "../models/Character.js";
import { User } from "../models/User.js";
import { Role } from "../models/Role.js";

//ONTE TO MANY
Genre.hasMany(Movie);
//genreId in Movie
//genre.getMovies(), countMovies(), hasMovie(), hasMovies(), setMovies(), addMovie(), addMovies(), removeMovie(), removeMovies(), createMovie()
//genre.addMovies() //añadir
//await genre.getMovies() //mostrarlas

Movie.belongsTo(Genre);
//genreId in Movie
//movie.getGenre(), movie.setGenre(), movie.createGenre()

//MANY TO MANY
Character.belongsToMany(Movie, { through: "characters_movies" });
//character.getMovies(), countMovies(), hasMovie(), hasMovies(), setMovies(), addMovie(), addMovies(), removeMovie(), removeMovies(), createMovie()
Movie.belongsToMany(Character, { through: "characters_movies" });
//movie.getCharacters(), countCharacters(), hasCharacter(), hasCharacters(), setCharacters(), addCharacter(), addCharacters(), removeCharacter(), removeCharacters(), createCharacter()

//MANY TO MANY
User.belongsToMany(Role, { through: "users_roles" });

Role.belongsToMany(User, { through: "users_roles" });
