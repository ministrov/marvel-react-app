const mapArrToString = (array) => {
  return array
    .filter(item => Number.isInteger(item))
    .map(String);
}

module.exports = mapArrToString;