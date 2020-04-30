import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import card from "./card";

export default combineReducers({
  auth,
  card,
  alert,
});
