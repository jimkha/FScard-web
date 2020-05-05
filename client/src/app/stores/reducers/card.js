import { CARD_LOADED, CARD_ERROR, TURN_OVER } from "../actions/types";

const initialState = {
  card: {
    isFacade: true,
  },
  cards: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CARD_LOADED:
      return {
        ...state,
        card: {
          isFacade: state.card.isFacade,
          ...payload[0],
        },
        cards: payload,
        loading: false,
      };
    case CARD_ERROR:
      return state;
    case TURN_OVER:
      return {
        ...state,
        card: {
          ...state.card,
          isFacade: !state.card.isFacade,
        },
      };
    default:
      return state;
  }
}
