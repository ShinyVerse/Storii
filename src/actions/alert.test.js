import { setAlert, clearAlert } from "./alert.js";
import { SET_ALERT, CLEAR_ALERT } from "./types";

describe("alert action", () => {
  it("setAlert", () => {
    const message = "THIS IS AN ALERT";

    try {
      const response = setAlert(message);
      let dispatchResult;
      const dispatch = (action) => {
        dispatchResult = action;
      };

      response(dispatch);

      expect(dispatchResult).toEqual({
        payload: { message, type: undefined },
        type: SET_ALERT,
      });
    } catch (err) {
      console.log(err);
      expect(true).toBe(false);
    }
  });

  it("clearAlert", () => {
    try {
      const response = clearAlert();

      let dispatchResult;
      const dispatch = (action) => {
        dispatchResult = action;
      };

      response(dispatch);
      expect(dispatchResult).toEqual({
        type: CLEAR_ALERT,
      });
    } catch (err) {
      console.error(err);
      expect(true).toBe(false);
    }
  });
});
