import createLocalesSettings from "./createLocalesSettings.js";

describe("Given createLocalesSettings.js", () => {
  test("when an array of strings is given as an argument, then the exected array should be returned ", () => {
    
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const EXPECTED_RESULT = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    const newArray = createLocalesSettings(LOCALES);

    expect(newArray).toBeDefined();
    expect(newArray).toEqual(EXPECTED_RESULT);
  });
});
