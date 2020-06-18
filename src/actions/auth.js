import * as types from "./types";
import axios from "axios";

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("s-token");

  const config = { headers: { "x-auth-token": token } };

  try {
    const res = await axios.get(
      `${process.env.storii_server_url}/auth`,
      config,
    );
    dispatch({
      type: types.LOAD_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ALERT,
      payload: { message: err.response.data.msg },
    });
  }
};

export const registerUser = ({ penName, email, password }) => async (
  dispatch,
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
      `${process.env.storii_server_url}/users`,
      newUser,
      config,
    );
    dispatch({
      type: types.CLEAR_ALERT,
    });
    dispatch({
      type: types.AUTH_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ALERT,
      payload: { message: err.response.data.msg },
    });
  }
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  const existingUser = {
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
      `${process.env.storii_server_url}/auth`,
      existingUser,
      config,
    );
    dispatch({
      type: types.CLEAR_ALERT,
    });
    dispatch({
      type: types.AUTH_SUCCESS,
      payload: res.data.token,
    });
  } catch (err) {
    dispatch({
      type: types.SET_ALERT,
      payload: { message: err.response.data.msg },
    });
  }
};
