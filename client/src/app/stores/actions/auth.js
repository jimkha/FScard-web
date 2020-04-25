import axios from "axios";

//UTILS
import { setAuthToken } from "../../utils/setAuthToken";

// LOAD USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    // set token into header http
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/user");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = () => async (dispatch) => {
  //TODO
  const res = await axios.get("/api/user/auth");
};
