import customersWhoBelongToMembership from "./customersWhoBelongToMembership.js";

describe("Given customersWhoBelongToMembership", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];
    
    const EXPECTED_RESULT = [
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ];

    const menbers = customersWhoBelongToMembership(CUSTOMERS);

    expect(menbers).toBeDefined();
    expect(menbers.length).toEqual(3);
    expect(menbers).toEqual(EXPECTED_RESULT);
  });
});