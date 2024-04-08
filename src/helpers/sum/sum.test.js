const sumTwoValues = require('../../helpers/sum/sum');

test('sumTwoValues', () => {
  expect(sumTwoValues(2, 4)).toBe(6);
});