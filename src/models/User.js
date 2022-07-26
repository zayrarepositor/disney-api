import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

//SCHEMA
export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/i,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    //at leat 8 characters
    password: {
      type: DataTypes.STRING,
      required: true,
      /* validate: {
        is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
      }, */
    },
  },
  { timestamps: false }
);
