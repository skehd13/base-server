import { development as devDb } from "./db";
import logConfig from "./log";

const getDbConfigByNodeEnv = () => {
  let dbConfig;
  console.log(process.env.NODE_ENV);
  if (
    process.env.NODE_ENV !== "development" &&
    process.env.NODE_ENV !== "staging" &&
    process.env.NODE_ENV !== "production"
  ) {
    throw new Error(`Unrecognized NODE_ENV: ${process.env.NODE_ENV}`);
  } else if (process.env.NODE_ENV === "development") {
    dbConfig = devDb;
  } else if (process.env.NODE_ENV === "staging") {
    dbConfig = stageDb;
  } else if (process.env.NODE_ENV === "production") {
    dbConfig = prodDb;
  }
  return dbConfig;
};

const dbConfig = getDbConfigByNodeEnv();

export { dbConfig, logConfig };
