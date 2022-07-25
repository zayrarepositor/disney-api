import { Character } from "../models/Character.js";
import { Movie } from "../models/Movie.js";

//list of specific character or all characters
export const getAllCharacters = async (req, res) => {
  try {
    const { name, age, movies, weight } = req.query;

    // get characters?name=name
    if (name) {
      const character = await Character.findOne({
        where: {
          name,
        },
        attributes: { exclude: ["id"] },
        include: {
          model: Movie,
          attributes: ["title"],
        },
      });
      character === null
        ? res.status(400).json("sorry, character not found")
        : res.status(200).json(character);
    }

    // get characters?age=age
    else if (age) {
      const characters = await Character.findAll({
        where: {
          age,
        },
        attributes: { exclude: ["id"] },
        include: {
          model: Movie,
          attributes: ["title"],
        },
      });
      characters === null
        ? res.status(400).json("sorry, characters not found")
        : res.status(200).json(characters);
    }
    // get characters?weight=weight
    else if (weight) {
      const characters = await Character.findAll({
        where: {
          weight,
        },
        attributes: { exclude: ["id"] },
        include: {
          model: Movie,
          attributes: ["title"],
        },
      });
      characters === null
        ? res.status(400).json("sorry, characters not found")
        : res.status(200).json(characters);
    }

    // get characters?movies=idMovie
    else if (movies) {
      const movie = await Movie.findByPk(movies);
      if (movie !== null) {
        const movieCharacters = await movie.getCharacters({
          attributes: { exclude: ["id"] },
        });
        res.status(200).json(movieCharacters);
      } else {
      }
    } else {
      const allCharacters = await Character.findAll({
        attributes: ["name", "image"],
      });
      if (getAllCharacters === null) {
        res.status(400).json("sorry, there are not characters");
      } else {
        res.status(200).json(allCharacters);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// create a character
export const createCharacter = async (req, res) => {
  try {
    const { name, image, age, weight, history, movies } = req.body;

    const newCharacter = await Character.create(
      {
        name,
        image,
        age,
        weight,
        history,
        movies: movies?.map((m) => {
          return { title: m };
        }),
      },
      { include: "movies" }
    );

    res.status(201).send({
      msg: `Great! You has created a character!!`,
      newCharacter,
    });
  } catch (err) {
    console.log(err);
  }
};

// edit a character
export const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await Character.findOne({
      where: { id },
      include: {
        model: Movie,
        attributes: ["title"],
      },
    });

    if (character) {
      const { name, image, age, weight, history, movies } = req.body;
      if (name) character.update({ name });
      if (image) character.update({ image });
      if (age) character.update({ age });
      if (weight) character.update({ weight });
      if (history) character.update({ history });
      if (movies) {
        /*   const movie = await Movie.create({
          title: movies,
        });
 */ character.addMovies({ movies });
        //character.update({ movies });//{"movies":[{"title":"colombia"}, {"title":"encanto2"}]}
        /* await character.addMovies({
          movies: movies.map((m) => {
            return { title: m };
          }),
        }); */
      }
      res.status(202).send({
        msg: `You has updated a character`,
        character,
      });
    } else {
      res.status(400).json({ msg: "character not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete a character
export const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await Character.findByPk(id);

    if (character) {
      await Character.destroy({
        where: { id },
      });

      res.status(301).json({ msg: `You has deleted a character!` });
    } else {
      res.status(400).json({ msg: "character not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
