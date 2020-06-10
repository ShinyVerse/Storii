import storiiReducer from "../storiiReducer";
import * as types from "../../actions/types";

describe("storiiReducer", () => {
  it("should return default state on unrelated action type", () => {
    const dummyCurrentState = {
      dummy: "I should be the only thing",
    };

    const fakeAction = {
      type: "unrelated action",
    };

    expect(storiiReducer(dummyCurrentState, fakeAction)).toEqual(
      dummyCurrentState,
    );
  });
  it("handles GET_STORII", () => {
    const storii = {
      _id: "idMate",
      entries: [{ _id: "", content: "i am a content" }],
      writers: [],
    };
    const action = {
      type: types.GET_STORII,
      payload: storii,
    };

    const expectedState = {
      storii,
    };

    const state = storiiReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });
});
