export const isStrictEqual = (
  valueA: string | number | boolean,
  valueB: string | number | boolean
): boolean => {
  if (Object.is(valueA, NaN) && Object.is(valueB, NaN)) {
    return false;
  }

  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  }

  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  }

  return Object.is(valueA, valueB);
};
