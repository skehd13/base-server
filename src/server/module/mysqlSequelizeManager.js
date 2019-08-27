import Sequelize from "sequelize";
const Op = Sequelize.Op;
import { dbConfig } from "../configs";

const mysql_config = dbConfig.rdb_mysql;
const { database, username, password } = mysql_config;
const sequelize = new Sequelize(database, username, password, {
  host: mysql_config.host,
  dialect: "mysql",
  logging: false,
  operatorsAliases: Op,
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

export default sequelize;
