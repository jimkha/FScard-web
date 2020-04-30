import axios from "axios";

import { TURN_OVER, CARD_LOADED, CARD_ERROR } from "../actions/types";

//LOAD CARDS
export const loadCards = () => async (dispatch) => {
  try {
    const res = axios.get("/api/cards");
    console.log(res);
    dispatch({
      type: CARD_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CARD_ERROR,
    });
  }
};

// TURN OVER
export const turnOverCard = () => async (dispatch) => {
  dispatch({
    type: TURN_OVER,
  });
};
