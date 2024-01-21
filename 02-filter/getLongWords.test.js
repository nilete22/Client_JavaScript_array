import getLongWords from "./getLongWords.js";

describe("Given getLongWords", () => {
  test("when [Java, C++, JavaScript, C#, TypeScript] is provided as argument Then exected array should be returned ", () => {
    
    const WORDS = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

    const newCollection = getLongWords(WORDS);

    expect(newCollection).toBeDefined();
    expect(newCollection.length).toEqual(2);
    expect(newCollection).toEqual(EXPECTED_RESULT);
  });

  test("when [John, George, Paul, Ringo] is provided as argument Then exected array should be returned ", () => {
   
    const WORDS = ["John", "George", "Paul", "Ringo"];
    const EXPECTED_RESULT = ["George", "Ringo"];

    const newCollection = getLongWords(WORDS);

    expect(newCollection).toBeDefined();
    expect(newCollection.length).toEqual(2);
    expect(newCollection).toEqual(EXPECTED_RESULT);
  });
});