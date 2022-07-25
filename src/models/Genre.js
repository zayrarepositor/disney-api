import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
/* import { Film } from "./Film.js"; */
//SCHEMA
export const Genre = sequelize.define("genres", {
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
});
