import { isStrictEqual } from "..";

describe("Given the strictEqual function", () => {
  describe("When it receives a 1 and a 1", () => {
    test("Then it should return true", () => {
      const valueA = 1;
      const valueB = 1;

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeTruthy();
    });
  });

  describe("When it receives a NaN and a NaN", () => {
    test("Then it should return false", () => {
      const valueA = NaN;
      const valueB = NaN;

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeFalsy();
    });
  });

  describe("When it receives a 0 and -0", () => {
    test("Then it should return true", () => {
      const valueA = 0;
      const valueB = -0;

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeTruthy();
    });
  });

  describe("When it receives a -0 and 0", () => {
    test("Then it should return true", () => {
      const valueA = -0;
      const valueB = 0;

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeTruthy();
    });
  });

  describe("When it receives a 1 and '1'", () => {
    test("Then it should return false", () => {
      const valueA = 1;
      const valueB = "1";

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeFalsy();
    });
  });
  describe("When it receives a true and false", () => {
    test("Then it should return false", () => {
      const valueA = true;
      const valueB = false;

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeFalsy();
    });
  });
  describe("When it receives a false and a false", () => {
    test("Then it should return true", () => {
      const valueA = false;
      const valueB = false;

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeTruthy();
    });
  });
  describe("When it receives a 'Water' and a 'oil'", () => {
    test("Then it should return false", () => {
      const valueA = "Water";
      const valueB = "oil";

      const expectedResult = isStrictEqual(valueA, valueB);

      expect(expectedResult).toBeFalsy();
    });
  });
});
