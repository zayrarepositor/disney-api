import { Character } from "../models/Character.js";
import { Genre } from "../models/Genre.js";
import { Movie } from "../models/Movie.js";

//list of specific movie or all characters
export const getAllMovies = async (req, res) => {
  try {
    const { name, genre, order } = req.query;

    // GET /movies?name=title
    if (name) {
      const movie = await Movie.findOne({
        where: {
          title: name,
        },
        attributes: { exclude: ["id", "genreId"] },
        include: {
          model: Character,
          attributes: ["name"],
        },
      });
      if (movie === null) {
        res.status(400).send(`Sorry, movie not found`);
      } else {
        res.status(200).json(movie);
      }
    }
    // GET /movies?genre=idGenre
    else if (genre) {
      const genrematched = await Genre.findByPk(genre);
      if (genrematched === null) {
        res.status(400).send(`Sorry, genre not found`);
      } else {
        const genreMovies = await genrematched.getMovies({
          order: [["date", order ? order : "ASC"]],
          attributes: { exclude: ["id", "genreId"] },
          include: {
            model: Character,
            attributes: ["name"],
          },
        });

        res.status(200).json({
          msg: `You have choosen ${genrematched.name} genre.`,
          genreMovies,
        });
      }
    } else {
      // get all movies (image, title, date)
      const allMovies = await Movie.findAll({
        order: [["date", order ? order : "ASC"]],
        attributes: ["id", "title", "image", "date"],
      });
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

    const newMovie = await Movie.create(
      {
        image,
        title,
        date,
        rating,
        characters: characters?.map((character) => {
          return { name: character };
        }),
      },
      { include: "characters" }
    );

    // bonus: genre
    if (genre) {
      const [genrematched, created] = await Genre.findOrCreate({
        where: {
          name: genre,
        },
      });
      await newMovie.setGenre(genrematched);
    }

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

    const movie = await Movie.findByPk(id);

    if (movie === null) {
      res.status(400).json({ msg: "movie not found" });
    } else {
      const { title, image, date, rating, characters } = req.body;
      if (title) await movie.update({ title });
      if (image) await movie.update({ image });
      if (date) await movie.update({ date });
      if (rating) await movie.update({ rating });
      if (characters) {
        const newCharacters = await Character.bulkCreate(characters);
        await movie.addCharacters(newCharacters); //{"characters":[{"name":"mirabel"}, {"name":"rapunzel"}]}
      }
      const movieUpdated = await Movie.findOne({
        where: { id },
        include: {
          model: Character,
          attributes: ["name"],
        },
      });

      res.status(202).send({
        msg: `You has updated a movie`,
        movieUpdated,
      });
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
