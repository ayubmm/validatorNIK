const validatorNIK = require('./index');

test('NIK Ngawur', () => {
  expect(validatorNIK(192347892344892334927842)).toBe(false);
});
