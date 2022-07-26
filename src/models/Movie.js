import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

//SCHEMA
export const Movie = sequelize.define(
  "movies",
  {
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
      validate: {
        isDate: true,
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "Rating must be an integer number between 1-5",
        },
        len: [1, 5],
      },
    },
  },
  { timestamps: false }
);
