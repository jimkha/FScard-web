const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
