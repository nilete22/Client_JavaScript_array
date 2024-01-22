/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

const extractCountriesWithFiveCharactersOrFewer = (COUNTRIES) => {

  const extractedCountries = COUNTRIES.filter((country) => {
    return country.length <= 5;
  });

  return extractedCountries;
};

console.log(extractCountriesWithFiveCharactersOrFewer(COUNTRIES));

export default extractCountriesWithFiveCharactersOrFewer;
