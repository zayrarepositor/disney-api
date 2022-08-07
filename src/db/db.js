import { Sequelize } from "sequelize";
import config from "../config.js";

export const sequelize = new Sequelize(config.DATABASE_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
