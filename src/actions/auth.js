import * as types from "./types";
import axios from "axios";

export const registerUser = ({ penName, email, password }) => async (
  dispatch,
) => {
  const newUser = {
    penName,
    email,
    password,
  };

  console.log("GETTING HERE IN TEST", newUser);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:4000/users/",
      newUser,
      config,
    );

    if (res.data.status === 200) {
      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: types.REGISTER_FAIL,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: types.SYSTEM_ERROR,
      payload: res.data,
    });
  }
};
