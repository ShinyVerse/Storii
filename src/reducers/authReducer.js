import * as types from "../actions/types";

const initialState = {
  isAuthenticated: null,
  user: null,
  token: null,
  isLoading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};
