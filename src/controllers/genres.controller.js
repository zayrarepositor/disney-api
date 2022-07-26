import { Genre } from "../models/Genre.js";
import { Movie } from "../models/Movie.js";

// getAllGenres,
export const getAllGenres = async (req, res) => {
  try {
    const allGenres = await Genre.findAll({
      include: {
        model: Movie,
        attributes: ["title"],
      },
    });
    res.status(201).json(allGenres);
  } catch (error) {
    console.log(error);
  }
};

//createGenre,
export const createGenre = async (req, res) => {
  try {
    const { name, image } = req.body;

    const newGenre = await Genre.create({
      name,
      image,
    });
    res.status(201).send({
      msg: `Great! You has created a genre!!`,
      newGenre,
    });
  } catch (error) {
    console.log(error);
  }
};

//updateGenre,
export const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;

    let genre = await Genre.findByPk(id);
    if (genre === null) {
      res.status(400).json({ msg: "genre not found" });
    } else {
      const { name, image } = req.body;
      if (name) await genre.update({ name });
      if (image) await genre.update({ image });

      const genreUpdated = await Genre.findByPk(id);
      res.status(202).send({
        msg: `You has updated a genre`,
        genreUpdated,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//deleteGenre,
export const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;

    await Genre.destroy({
      where: { id },
    });

    res.status(301).json({ msg: `You has deleted a genre!` });
  } catch (err) {
    console.log(err);
  }
};
