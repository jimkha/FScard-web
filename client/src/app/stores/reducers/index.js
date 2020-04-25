import { combineReducers } from "redux";
import alert from "./alert";
import calendar from "./calendar";
import auth from "./auth";

export default combineReducers({
  alert,
  auth,
});
