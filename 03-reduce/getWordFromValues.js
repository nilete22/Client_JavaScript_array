/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

const getWordFromValues = function (values) {
  const newString = values.reduce((word, number) => {

    return word + number.toString();
    
  }, "");

  return newString;
};

export default getWordFromValues;