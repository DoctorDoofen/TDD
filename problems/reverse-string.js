function reverseString(string) {
  let word = string.split('').reverse()
  return word.join('')
};


console.log(reverseString('fun'))

module.exports = reverseString
