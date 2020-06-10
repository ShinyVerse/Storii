import * as types from "../actions/types";

const initialState = {
  storii: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_STORII:
      return {
        ...state,
        storii: action.payload,
      };
    default:
      return state;
  }
};
