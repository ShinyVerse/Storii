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

  it("handles AUTH_SUCCESS", () => {
    const action = {
      type: types.AUTH_SUCCESS,
      payload: "tokenmate",
    };

    const expectedState = {
      user: null,
      token: action.payload,
      isLoading: false,
    };

    const state = authReducer(undefined, action);
    expect(localStorage.getItem("s-token")).toBe("tokenmate");
    expect(state).toEqual(expectedState);
  });

  it("handles LOAD_USER", () => {
    const initialState = {
      user: null,
      token: "1234567",
      isLoading: false,
    };
    const defaultUser = {
      _id: "123",
    };
    const action = {
      type: types.LOAD_USER,
      payload: defaultUser,
    };

    const state = authReducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: defaultUser });
  });
});
