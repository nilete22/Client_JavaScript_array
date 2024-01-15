/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

const getLongWords = function (words) {
  const expectedWords = [];
  const collectionLength = words.length;

  for (let index = 0; index < collectionLength; index++) {
    if (words[index].length >= 5) {
      
      const Word = words[index];
      expectedWords.push(Word);
    }
  }

  return expectedWords;
};

export default getLongWords;
