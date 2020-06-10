import mockAxios from "axios";
import { getStorii } from "./storii.js";
import * as types from "./types";

jest.mock("axios");

const handleError = (err) => {
  console.log("error, ", err);
  expect(true).toBe(false);
};

describe("storii action", () => {
  const dispatch = jest.fn();
  const DUMMY_ID = "storyId";

  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("getStorii", () => {
    it.only("is successful", async () => {
      mockAxios.get.mockImplementationOnce(
        async () =>
          await Promise.resolve({
            storii: {
              entries: [{ content: "hi", writer: { penName } }],
            },
          }),
      );

      try {
        const response = await getStorii(DUMMY_ID);

        await response(dispatch);

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(
          `http://localhost:4000/storii/${DUMMY_ID}`,
        );

        const expectedPayload = {
          storii: {
            entries: [{ content: "hi", writer: { penName } }],
          },
        };

        expect(dispatch).toHaveBeenCalledWith({
          payload: expectedPayload,
          type: types.GET_STORII,
        });
      } catch (err) {
        handleError(err);
      }
    });
  });
});
