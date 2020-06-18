import * as types from "./types";
import axios from "axios";

export const getStorii = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.storii_server_url}/storii/${id}`,
    );

    dispatch({
      type: types.GET_STORII,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);

    // dispatch({
    //   type: types.SET_ALERT,
    //   payload: err.response.data.msg,
    // });
  }
};
