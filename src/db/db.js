import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("disney", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  native: false,
});
