import * as types from "../actions/types";

const initialState = {
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
    case types.LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
