import mockAxios from "axios";
import { registerUser } from "./auth.js";
import {
  REGISTER_SUCCESS,
  SET_ALERT,
  CLEAR_ALERT,
  LOGIN_SUCCESS,
} from "./types";

jest.mock("axios");

const handleError = (err) => {
  console.log("error, ", err);
  expect(true).toBe(false);
};

describe("auth action", () => {
  const dispatch = jest.fn();
  const user = {
    penName: "bob",
    email: "this@that.com",
    password: "123445",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("registerUser", () => {
    it("is successful", async () => {
      mockAxios.post.mockImplementationOnce(
        async () => await Promise.resolve({ data: { token: "DINOSAUR" } }),
      );

      try {
        const response = await registerUser(user);

        await response(dispatch);

        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith(
          "http://localhost:4000/users",
          user,
          {
            headers: { "Content-Type": "application/json" },
          },
        );

        expect(dispatch).toHaveBeenCalledWith({
          payload: "DINOSAUR",
          type: REGISTER_SUCCESS,
        });
      } catch (err) {
        handleError(err);
      }
    });
    it("dispatches CLEAR_ALERT when successful", async () => {
      mockAxios.post.mockImplementationOnce(
        async () => await Promise.resolve({ data: { token: "DINOSAUR" } }),
      );

      try {
        const response = await registerUser(user);

        await response(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: CLEAR_ALERT,
        });
      } catch (err) {
        handleError(err);
      }
    });
    it("dispatches SET_ALERT when email already exists", async () => {
      mockAxios.post.mockImplementationOnce(
        async () =>
          await Promise.reject({
            response: { data: { msg: "user already exists" } },
          }),
      );

      try {
        const response = await registerUser(user);

        await response(dispatch);

        expect(mockAxios.post).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          payload: "user already exists",
          type: SET_ALERT,
        });
      } catch (err) {
        handleError(err);
      }
    });
  });
  describe("loginUser", () => {
    it("is successful", async () => {
      mockAxios.post.mockImplementationOnce(
        async () => await Promise.resolve({ data: { token: "DINOSAUR" } }),
      );

      const existingUser = {
        email: "test@test.com",
        password: "123456",
      };

      try {
        const response = await loginUser(existingUser);

        await response(dispatch);

        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith(
          "http://localhost:4000/auth",
          existingUser,
          {
            headers: { "Content-Type": "application/json" },
          },
        );

        expect(dispatch).toHaveBeenCalledWith({
          payload: "DINOSAUR",
          type: LOGIN_SUCCESS,
        });
      } catch (err) {
        handleError(err);
      }
    });
  });
});
