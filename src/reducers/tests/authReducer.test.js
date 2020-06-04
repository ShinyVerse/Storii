import authReducer from "../authReducer";
import * as types from "../../actions/types";

describe("authReducer", () => {
  it("should return default state on unrelated action type", () => {
    const dummyCurrentState = {
      dummy: "I should be the only thing",
    };

    const fakeAction = {
      type: "unrelated action",
    };

    expect(authReducer(dummyCurrentState, fakeAction)).toEqual(
      dummyCurrentState,
    );
  });

  it("update state on when user registers successfully", () => {
    const action = {
      type: types.AUTH_SUCCESS,
      payload: "tokenmate",
    };

    const expectedState = {
      isAuthenticated: false,
      user: null,
      token: action.payload,
      isLoading: false,
    };

    const state = authReducer(undefined, action);
    expect(localStorage.getItem("s-token")).toBe("tokenmate");
    expect(state).toEqual(expectedState);
  });
  it("update state when user logs in successfully", () => {
    const action = {
      type: types.AUTH_SUCCESS,
      payload: "tokenmate",
    };

    const expectedState = {
      isAuthenticated: false,
      user: null,
      token: action.payload,
      isLoading: false,
    };

    const state = authReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
