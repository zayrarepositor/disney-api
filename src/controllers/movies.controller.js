import { Character } from "../models/Character.js";
import { Genre } from "../models/Genre.js";
import { Movie } from "../models/Movie.js";

//list of specific movie or all characters
export const getAllMovies = async (req, res) => {
  try {
    const { name, genre, order, date } = req.query;

    // GET /movies?name=title
    if (name) {
      const movie = await Movie.findOne({
        where: {
          title: name,
        },
        include: {
          model: Character,
          attributes: ["name"],
        },
      });

      res.status(200).json(movie);
    }

    // GET /movies?genre=idGenero
    else if (genre) {
      /* 
      const genre =  Genre.findByPk(genre)
      genreMovies = genre.getMovies(
      {  include: {
          model: Character,
          attributes: ["name"],
        },}
      ) */
      const movies = await Movie.findAll({
        where: {
          genreId: genre,
        },
        include: {
          model: Character,
          attributes: ["name"],
        },
        //order?order=ASC | DESC
        //date?date=ASC | DESC
      });

      res.status(200).json(movies);
    } else {
      // get all movies (image, title, date)
      const allMovies = await Movie.findAll({
        attributes: ["title", "image", "date"],
      });
      //order?order=ASC | DESC
      //date?date=ASC | DESC

      res.status(200).json(allMovies);
    }
  } catch (error) {
    console.log(error);
  }
};

// create a movie
export const createMovie = async (req, res) => {
  try {
    const { image, title, date, rating, genre, characters } = req.body;

    const newMovie = await Movie.create({
      image,
      title,
      date,
      rating,
    });
    if (genre) {
      const genrematched = await Genre.findOrCreate({
        where: {
          name: genre,
        },
      });
      newMovie.setGenre(genrematched);
    }

    /* ASOCIAR PERSONAJES
        if (characters) {
      const charactersmatched = await Character.findAll({
        where: {
          name: characters,
        },
      });

      await newMovie.setCharacters(charactersmatched);
    }
 */
    res.status(201).send({
      msg: `Great! You has created a movie!!`,
      newMovie,
    });
  } catch (err) {
    console.log(err);
  }
};

// edit a movie
export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findOne({
      where: { id },
    });

    if (movie) {
      movie.set(req.body);
      await movie.save();

      res.status(202).send({
        msg: `You has updated a movie`,
        movie,
      });
      //GENRES??CHARACTERS??
    } else {
      res.status(400).json({ msg: "movie not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete a movie
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findOne({
      where: { id },
    });

    if (movie) {
      await Movie.destroy({
        where: { id },
      });

      res.status(301).json({ msg: `You has deleted a movie!` });
    } else {
      res.status(400).json({ msg: "movie not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
