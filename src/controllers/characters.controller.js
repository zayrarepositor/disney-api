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
      if (character === null) {
        res.status(400).json("sorry, character not found");
      } else {
        res.status(200).json(character);
      }
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
      if (characters.length < 1) {
        res.status(400).send("sorry, characters not found");
      } else {
        res.status(200).json({ msg: `Age: ${age} years:`, characters });
      }
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
      if (characters.length < 1) {
        res.status(400).send("sorry, characters not found");
      } else {
        res.status(200).json({ msg: `Weight: ${weight} kgs:`, characters });
      }
    }

    // get characters?movies=idMovie
    else if (movies) {
      const movie = await Movie.findByPk(movies);
      if (movie === null) {
        res.status(400).json("sorry, movie not found");
      } else {
        const movieCharacters = await movie.getCharacters({
          attributes: { exclude: ["id"] },
        });
        res.status(200).json({ msg: `Movie: ${movie.title}`, movieCharacters });
      }
    } else {
      const allCharacters = await Character.findAll({
        attributes: ["id", "name", "image"],
      });
      if (allCharacters.length < 1) {
        res.status(400).json("sorry, there are not characters");
      } else {
        res.status(200).json({ msg: `All characters:`, allCharacters });
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

    const newCharacter = await Character.create({
      name,
      image,
      age,
      weight,
      history,
    });
    if (movies) {
      const [moviematched, created] = await Movie.findOrCreate({
        where: {
          title: movies,
        },
      });
      await newCharacter.addMovie(moviematched);
    }
    const finishedCharacter = await Character.findOne({
      where: {
        name,
      },
      attributes: { exclude: ["id"] },
      include: {
        model: Movie,
        attributes: ["title"],
      },
    });
    res.status(201).send({
      msg: `Great! You has created a character!!`,
      finishedCharacter,
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

    if (character === null) {
      res.status(400).json({ msg: "character not found" });
    } else {
      const { name, image, age, weight, history, movies } = req.body;
      if (name) await character.update({ name });
      if (image) await character.update({ image });
      if (age) await character.update({ age });
      if (weight) await character.update({ weight });
      if (history) await character.update({ history });
      if (movies) {
        const newMovies = await Movie.bulkCreate(movies);
        await character.addMovies(newMovies); //{"movies":[{"title":"colombia"}, {"title":"encanto2"}]}
      }
      const characterUpdated = await Character.findOne({
        where: { id },
        include: {
          model: Movie,
          attributes: ["title"],
        },
      });
      res.status(202).send({
        msg: `You has updated a character`,
        characterUpdated,
      });
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
