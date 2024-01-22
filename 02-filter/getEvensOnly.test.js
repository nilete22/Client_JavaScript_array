import getEvensOnly from "./getEvensOnly.js";

describe("Given getEvensOnly", () => {
  test("When an array of number is given, even numbers hsould be returned", () => {
    
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

    const expectedResult = [2, 12, 42, 28];

    const evenNumbers = getEvensOnly(COUNTERS);

    expect(evenNumbers).toEqual(expectedResult);
  });
});
