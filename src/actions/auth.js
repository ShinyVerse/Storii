import * as types from "./types";
import axios from "axios";

export const registerUser = ({ penName, email, password }) => async (
  dispatch
) => {
  console.log("ACTION HERER HEREHRHEHR");

  const newUser = {
    penName,
    email,
    password,
  };
  console.log("newUser", newUser);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      "https://storii-server.herokuapp.com/users",
      newUser,
      config
    );
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};
