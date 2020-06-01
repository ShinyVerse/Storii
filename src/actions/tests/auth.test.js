import { registerUser } from "../auth.js";
import axios from "axios";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

axios.post.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));

test.only("calls axios.post registerUser", async () => {
  console.log(registerUser);

  registerUser({
    penName: "me",
    email: "hi",
    password: "123456",
  });
  await expect(axios.post).toHaveBeenCalledWith(1);
});
