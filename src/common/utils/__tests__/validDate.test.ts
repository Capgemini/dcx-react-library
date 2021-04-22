import { validateDateString } from '../validDate';

describe('validate date', () => {
  it('should return the date provided is valid', () => {
    expect(validateDateString(29, 7, 1982)).toBeTruthy();
  });

  it('should return the date provided is invalid', () => {
    expect(validateDateString(31, 4, 2021)).toBeFalsy();
  });
});
