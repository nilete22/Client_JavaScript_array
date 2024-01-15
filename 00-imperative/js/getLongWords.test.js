import getLongWords from "./getLongWords.js";

describe("Given getLongWords", () => {
  test("when [Java, C++, JavaScript, C#, TypeScript] is provided as argument Then exected array should be returned ", () => {
    const words = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const expectedResult = ["JavaScript", "TypeScript"];

    const newCollection = getLongWords(words);

    expect(newCollection).toBeDefined();
    expect(newCollection).toEqual(expectedResult);
  });

  test("when [John, George, Paul, Ringo] is provided as argument Then exècted array should be returned ", () => {
    const words = ["John", "George", "Paul", "Ringo"];
    const expectedResult = ["George", "Ringo"];

    const newCollection = getLongWords(words);

    expect(newCollection).toBeDefined();
    expect(newCollection).toEqual(expectedResult);
  });
});
