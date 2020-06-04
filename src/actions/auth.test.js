import mockAxios from "axios";
import { registerUser, loginUser } from "./auth.js";
import { AUTH_SUCCESS, SET_ALERT, CLEAR_ALERT } from "./types";

jest.mock("axios");

const handleError = (err) => {
  console.log("error, ", err);
  expect(true).toBe(false);
};

describe("auth action", () => {
  const dispatch = jest.fn();
  let user;
  beforeEach(() => {
    jest.clearAllMocks();
    user = {
      penName: "bob",
      email: "this@that.com",
      password: "123445",
    };
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
          type: AUTH_SUCCESS,
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

      delete user.penName;

      try {
        const response = await loginUser(user);

        await response(dispatch);

        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith(
          "http://localhost:4000/auth",
          user,
          {
            headers: { "Content-Type": "application/json" },
          },
        );

        expect(dispatch).toHaveBeenCalledWith({
          payload: "DINOSAUR",
          type: AUTH_SUCCESS,
        });
      } catch (err) {
        handleError(err);
      }
    });
    it("dispatches CLEAR_ALERT when successful", async () => {
      mockAxios.post.mockImplementationOnce(
        async () => await Promise.resolve({ data: { token: "DINOSAUR" } }),
      );
      delete user.penName;
      try {
        const response = await loginUser(user);

        await response(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: CLEAR_ALERT,
        });
      } catch (err) {
        handleError(err);
      }
    });
    it("dispatches SET_ALERT when error logging in", async () => {
      mockAxios.post.mockImplementationOnce(
        async () =>
          await Promise.reject({
            response: { data: { msg: "Invalid credentials" } },
          }),
      );
      delete user.penName;
      try {
        const response = await loginUser(user);

        await response(dispatch);

        expect(mockAxios.post).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          payload: "Invalid credentials",
          type: SET_ALERT,
        });
      } catch (err) {
        handleError(err);
      }
    });
  });
});
