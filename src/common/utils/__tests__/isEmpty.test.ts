import { isEmpty } from '../isEmpty';

describe('isEmpty', () => {
  it('should return true when the passed in value is an empty object', () => {
    const emptyObject = {};
    expect(isEmpty(emptyObject)).toBe(true);
  });

  it('should return true when the passed in value is an empty string', () => {
    const emptyString = ' ';
    expect(isEmpty(emptyString)).toBe(true);
  });

  it('should return false when the passed in value is an object that is not empty', () => {
    const object = { colour: 'pink' };
    expect(isEmpty(object)).toBe(false);
  });

  it('should return true when the passed in value is a string that has a length', () => {
    const string = 'pink';
    expect(isEmpty(string)).toBe(false);
  });
});
