import * as types from "./types";

export const setAlert = (message) => async (dispatch) => {
  try {
    dispatch({
      type: types.SET_ALERT,
      payload: message,
    });
  } catch (err) {
    console.error(err);
  }
};
