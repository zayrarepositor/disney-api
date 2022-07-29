import { Sequelize } from "sequelize";
import config from "../config.js";

export const sequelize = new Sequelize(
  "disney",
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: "postgres",
    logging: false,
    native: false,
  }
);
