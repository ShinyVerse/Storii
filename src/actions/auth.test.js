import mockAxios from "axios";
import { registerUser } from "./auth.js";
import { REGISTER_SUCCESS } from "./types";

jest.mock("axios");

describe("auth action", () => {
  beforeEach(() => {
    jest.clearAllMocks;
  });
  it("Register user", async () => {
    mockAxios.post.mockImplementationOnce(
      async () => await Promise.resolve({ data: { token: "DINOSAUR" } }),
    );
    const user = {
      penName: "bob",
      email: "this@that.com",
      password: "123445",
    };
    try {
      const response = await registerUser(user);
      let dispatchResult;
      const dispatch = (action) => {
        dispatchResult = action;
      };
      await response(dispatch);

      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.post).toHaveBeenCalledWith(
        "http://localhost:4000/users",
        user,
        { headers: { "Content-Type": "application/json" } },
      );

      expect(dispatchResult).toEqual({
        payload: "DINOSAUR",
        type: REGISTER_SUCCESS,
      });
    } catch (err) {
      console.log("error, ", err);
      expect(true).toBe(false);
    }
  });
});
