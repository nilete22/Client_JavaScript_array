import { feedMonkeys } from "./feedMonkeys.js";
describe("Given feedMonkeys", () => {
  test("when 🍌 is provided as argument Then exècted array should be returned ", () => {
    //arrange
    const fruit = "🍌";
    const EXPECTED_RESULT = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    //act
    const Monkeys = feedMonkeys(fruit);

    //assert
    expect(Monkeys).toBeDefined();
    expect(Monkeys).toEqual(EXPECTED_RESULT);
    expect(Monkeys).toBe(3);
  });

  test("when 🍎 is provided as argument Then exècted array should be returned ", () => {
    //arrange
    const fruit = "🍎";
    const EXPECTED_RESULT = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    //act
    const Monkeys = feedMonkeys(fruit);

    //assert
    expect(Monkeys).toBeDefined();
    expect(Monkeys).toEqual(EXPECTED_RESULT);
    expect(Monkeys).toBe(3);
  });
});
