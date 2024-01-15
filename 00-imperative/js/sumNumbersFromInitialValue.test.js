import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";

describe("Given sumNumbersFromInitialValue", () => {
  test("when an array of numbers and an initialValue is given as an argument, the sum of the values in the array starting at the initialValue is returned ", () => {
    const numbers = [1, 2, 3, 4, 5];
    const initialValue = 0;
    const expectesResult = 15;

    const sum = sumNumbersFromInitialValue(numbers, initialValue);

    expect(sum).toBeDefined();
    expect(sum).toEqual(expectedResult);
  });

  test("when an array of numbers and an initialValue is given as an argument, the sum of the values in the array starting at the initialValue is returned ", () => {
    const numbers = [1, 2, 3, 4, 5];
    const initialValue = 10;
    const expectedResult = 25;

    const sum = sumNumbersFromInitialValue(numbers, initialValue);

    expect(sum).toBeDefined();
    expect(sum).toEqual(expectedResult);
  });
});
