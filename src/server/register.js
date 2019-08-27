import Good from "good";
import Inert from "inert";
import Vision from "vision";
import { logConfig } from "./configs";
import sequelize from "./module/mysqlSequelizeManager";

const sequelizeRegister = {
  plugin: require("hapi-sequelizejs"),
  options: [
    {
      name: "sewang2018", // identifier
      models: [__dirname + "/models/*.js"], // paths/globs to model files
      sequelize: sequelize, // sequelize instance
      sync: true, // sync models - default false
      forceSync: false // force sync (drops tables) - default false
    }
  ]
};

const inertRegister = {
  plugin: Inert
};

const visionRegister = {
  plugin: Vision
};

const goodRegister = {
  plugin: Good,
  options: logConfig
};

export default [sequelizeRegister, inertRegister, visionRegister, goodRegister];
