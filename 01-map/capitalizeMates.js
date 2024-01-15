/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeMates = function (MATES) {
  const matesCapitalLetter = MATES.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });

  return matesCapitalLetter;
};

export default capitalizeMates;
