import * as types from "../actions/types";

const initialState = {
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ALERT:
      return {
        ...state,
        message: action.payload,
      };
    case types.CLEAR_ALERT:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
