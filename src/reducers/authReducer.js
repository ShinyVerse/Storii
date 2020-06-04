import * as types from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      localStorage.setItem("s-token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
