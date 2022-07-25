import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

//SCHEMA
export const Character = sequelize.define(
  "characters",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        is: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i,
      },
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: "Image must be a url",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 90],
      },
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    history: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
