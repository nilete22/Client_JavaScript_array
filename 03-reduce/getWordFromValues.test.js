import getWordFromValues from "./getWordFromValues.js";

describe("Given getTotalVoters.js", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    
    const VALUES = [1, 2, 3];
    const EXPECTED_RESULT = "123";

    const newString = getWordFromValues(VALUES);

    expect(newString).toBeDefined();
    expect(newString).toEqual(EXPECTED_RESULT);
  });
});
