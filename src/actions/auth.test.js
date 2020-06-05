import mockAxios from "axios";
import { registerUser, loginUser, loadUser } from "./auth.js";
import * as types from "./types";

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
          type: types.AUTH_SUCCESS,
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
          type: types.CLEAR_ALERT,
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
          type: types.SET_ALERT,
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
          type: types.AUTH_SUCCESS,
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
          type: types.CLEAR_ALERT,
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
          type: types.SET_ALERT,
        });
      } catch (err) {
        handleError(err);
      }
    });
  });
  describe("loadUser", () => {
    it("dispatches USER_LOADED when successful", async () => {
      const user = {
        _id: "testId",
      };
      const defaultToken = "defaultTokenMate";

      localStorage.setItem("s-token", defaultToken);

      mockAxios.get.mockImplementationOnce(
        async () => await Promise.resolve({ data: user }),
      );

      try {
        const response = await loadUser();

        await response(dispatch);

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(
          "http://localhost:4000/auth",
          {
            headers: { "x-auth-token": defaultToken },
          },
        );

        expect(dispatch).toHaveBeenCalledWith({
          payload: user,
          type: types.LOAD_USER,
        });
      } catch (err) {
        handleError(err);
      }
    });
    it("dispatches SET_ALERT when error logging in", async () => {
      mockAxios.get.mockImplementationOnce(
        async () =>
          await Promise.reject({
            response: { data: { msg: "You need to sign in" } },
          }),
      );
      try {
        const response = await loadUser();

        await response(dispatch);

        expect(mockAxios.get).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          payload: "You need to sign in",
          type: types.SET_ALERT,
        });
      } catch (err) {
        handleError(err);
      }
    });
  });
});
