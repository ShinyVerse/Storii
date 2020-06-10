import * as types from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STORII:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
