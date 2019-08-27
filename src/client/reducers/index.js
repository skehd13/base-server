import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { sampleReducer } from "./sample";

export default history =>
  combineReducers({
    sampleReducer,
    router: connectRouter(history)
  });
