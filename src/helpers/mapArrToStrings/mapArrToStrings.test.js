const mapArrToString = require('../../helpers/mapArrToStrings/mapArrToStrings');

describe('mapArrToString', () => {
  test('Корректное значение', () => {
    expect(mapArrToString([1, 3, 4])).toEqual(['1', '3', '4']);
  });
  test('Мешанина', () => {
    expect(mapArrToString([1, 3, 4, null, undefined])).toEqual(['1', '3', '4']);
  });
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('Отрицание', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});