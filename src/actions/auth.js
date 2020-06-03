import * as types from "./types";
import axios from "axios";

export const registerUser = ({ penName, email, password }) => async (
  dispatch
) => {
  const newUser = {
    penName,
    email,
    password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:4000/users",
      newUser,
      config
    );
    dispatch({
      type: types.CLEAR_ALERT,
    });
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ALERT,
      payload: err.response.data.msg,
    });
  }
};
