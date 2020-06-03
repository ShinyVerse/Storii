import { setAlert, removeAlert } from "./alert.js";
import { SET_ALERT } from "./types";

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
        payload: message,
        type: SET_ALERT,
      });
    } catch (err) {
      console.log(err);
      expect(true).toBe(false);
    }
  });

  it("removeAlert", async () => {});
});
