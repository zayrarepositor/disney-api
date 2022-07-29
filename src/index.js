//type module en package.json para usar import
import app from "./app.js";
import { sequelize } from "./db/db.js";
import "./db/associations.js";
import config from "./config.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(config.PORT);
    console.log("server on port", config.PORT);
  } catch (error) {
    console.error("connection failed", error);
  }
}

main();
