import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given extractCountriesWithFiveCharactersOrFewer", () => {
  test("When an array of strings is given has an argument, countries that are 5 characters or fewer in length should be returned", () => {
    
    const countries = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];

    const expectedResult = ["Italy"];

    const countriesFilter = extractCountriesWithFiveCharactersOrFewer(countries);

    expect(countriesFilter).toEqual(expectedResult);
  });
});
