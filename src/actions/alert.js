import * as types from "./types";

export const setAlert = (message, type) => (dispatch) => {
  try {
    dispatch({
      type: types.SET_ALERT,
      payload: { message, type },
    });
  } catch (err) {
    console.error(err);
  }
};

export const clearAlert = () => (dispatch) => {
  try {
    dispatch({
      type: types.CLEAR_ALERT,
    });
  } catch (err) {
    console.error(err);
  }
};
