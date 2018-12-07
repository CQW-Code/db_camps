import { combineReducers } from "redux";
import camps from "./camps";
import flash from "./flash";

const rootReducer = combineReducers({
  camps,
  flash
});

export default rootReducer;
