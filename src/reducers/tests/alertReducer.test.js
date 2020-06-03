import alertReducer from "../alertReducer";
import * as types from "../../actions/types";

describe("alertReducer", () => {
  it("should return default state on unrelated action type", () => {
    const dummyCurrentState = {
      dummy: "I should be the only thing",
    };

    const fakeAction = {
      type: "unrelated action",
    };

    expect(authReducer(dummyCurrentState, fakeAction)).toEqual(
      dummyCurrentState
    );
  });
  it("update state when setAlert is called", () => {
    const action = {
      type: types.SET_ALERT,
      payload: "dangerousMessage",
    };

    const expectedState = {
      alert: action.payload,
    };

    const state = alertReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
  it("update state when clearAlert is called", () => {
    const action = {
      type: types.CLEAR_ALERT,
    };

    const expectedState = {
      alert: null,
    };

    const state = alertReducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
