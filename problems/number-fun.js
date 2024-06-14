function returnsThree() {
  return 3
}

function reciprocal(n) {
  if (n > 1000000 || n < 0) {
    throw new RangeError('number has to be between 0 and 1,000,000')
  }
  return 1 / n
}

module.exports = {
  returnsThree,
  reciprocal
};
