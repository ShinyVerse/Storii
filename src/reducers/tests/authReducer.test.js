import authReducer from "../authReducer";
import * as types from "../../actions/types";

describe("authReducer", () => {
  test("should return default state on unrelated action type", () => {
    const dummyCurrentState = {
      dummy: "I should be the only thing",
    };
    const dummyAction = {
      type: "unrelated action",
    };
    expect(authReducer(dummyCurrentState, dummyAction)).toEqual(
      dummyCurrentState
    );
  });
  test("update state on when user registers successfuly", () => {
    const dummyAction = {
      type: types.REGISTER_SUCCESS,
      payload: "tokenmate",
    };

    const expectedState = {
      isAuthenticated: null,
      user: null,
      token: dummyAction.payload,
      isLoading: null,
    };

    const state = authReducer(undefined, dummyAction);

    expect(state.token).toBe(expectedState);
  });
});
