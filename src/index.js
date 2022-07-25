//type module en package.json para usar import
import app from "./app.js";
import { sequelize } from "./db/db.js";
import "./db/associations.js";

/* import "./models/Genre.js";
import "./models/Movie.js";
import "./models/Character.js";
 */
async function main() {
  try {
    await sequelize.sync({ force: false });
    //antes de tener modelos: await sequelize.authenticate(); console.log("connection established")
    app.listen(3000);
    console.log("server on port", 3000);
  } catch (error) {
    console.error("connection failed", error);
  }
}

main();
