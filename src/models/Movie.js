import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
/* import { Genre } from "./Genre.js";
 */
//SCHEMA
export const Movie = sequelize.define("movies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  //creation date
  date: {
    type: DataTypes.DATEONLY,
  },
  //1-5
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      isInt: {
        msg: "Rating must be an integer number between 1-5",
      },
      len: [1, 5],
    },
  },
  //characters association
  //genreId
});

/* import { Film } from "./Film.js";
Genre.hasMany(Film, {
  foreignKey: "genreId",
  sourceKey: "id",
});

Film.belongsTo(Genre, {
  foreignKey: "genreId",
  targetId: "id",
}); */
