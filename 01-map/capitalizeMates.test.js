import capitalizeMates from "./capitalizeMates.js";

describe("Given capitalizeMates", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    const mates = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedResult = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const matesCapitalLetter = capitalizeMates(mates);

    expect(matesCapitalLetter).toBeDefined();
    expect(matesCapitalLetter.length).toEqual(4);
    expect(matesCapitalLetter).toEqual(expectedResult);
  });
});
