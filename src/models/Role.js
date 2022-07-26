import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

//SCHEMA
export const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rolename: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { timestamps: false }
);
