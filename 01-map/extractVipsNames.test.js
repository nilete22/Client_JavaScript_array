import extractVipsNames from "./extractVipsNames.js";

describe("Given extractVipsNames", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];

    const expectedResult = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    const names = extractVipsNames(VIPS);

    expect(names).toBeDefined();
    expect(names.length).toEqual(5);
    expect(names).toEqual(expectedResult);
  });
});
