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
      type: types.REGISTER_SUCCESS,
      payload: "tokenmate",
    };

    const expectedState = {
      isAuthenticated: null,
      user: null,
      token: action.payload,
      isLoading: null,
    };

    const state = authReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
