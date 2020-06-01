// this is 'manual mocking' btw
// export default {
//   post: jest.fn(() => Promise.resolve({ data: {} })),
// };
// // or if you wanna cover for the 'create' method too
const mockAxios = {
  post: jest.fn(() => Promise.resolve({ data: {} })),
};
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
