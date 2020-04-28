import axios from "axios";

import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actions/types";

import { setAlert } from "./alert";
//UTILS
import setAuthToken from "../../utils/setAuthToken";

// LOAD USER
export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      // set token into header http
      setAuthToken(localStorage.token);
      const res = await axios.get("/api/user/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//LOGIN
export const login = (data) => async (dispatch) => {
  if (data.error) {
    console.log(data.error);
    return;
  }
  try {
    const tokenId = data.tokenId;
    const res = await axios.get("/api/user/login/" + tokenId);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
