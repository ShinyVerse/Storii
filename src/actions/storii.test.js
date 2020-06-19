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
    it("is successful", async () => {
      mockAxios.get.mockImplementationOnce(
        async () =>
          await Promise.resolve({
            data: {
              storii: {
                entries: [{ content: "hi", writer: { penName: "laursey" } }],
              },
            },
          }),
      );

      try {
        const response = await getStorii(DUMMY_ID);

        await response(dispatch);

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(
          `${process.env.STORII_SERVER_URL}/storii/${DUMMY_ID}`,
        );

        const expectedPayload = {
          storii: {
            entries: [{ content: "hi", writer: { penName: "laursey" } }],
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
