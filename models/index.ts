const configDb = require("../db/config");
import { Sequelize, Dialect } from "sequelize";

const sequelize = new Sequelize(configDb.development);

const db = {
  Sequelize,
  sequelize,
};
db.sequelize
  .sync({ force: false })
  .then(() => console.log("DB is synced"))
  .catch((err) => console.log(err, "error here ", err.message));

export default db;
