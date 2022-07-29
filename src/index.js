//type module en package.json para usar import
import app from "./app.js";
import "dotenv/config";
import { sequelize } from "./db/db.js";
import "./db/associations.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT);
    console.log("server on port", process.env.PORT);
  } catch (error) {
    console.error("connection failed", error);
  }
}

main();
