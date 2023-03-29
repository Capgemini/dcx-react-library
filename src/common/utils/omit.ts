export const omit = (originalObj: object, keysToOmit: string[]) =>
  Object.fromEntries(
    Object.entries(originalObj).filter(([key]) => !keysToOmit.includes(key))
  );
