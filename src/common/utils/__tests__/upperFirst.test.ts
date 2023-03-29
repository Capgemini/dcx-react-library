import { upperFirst } from '../upperFirst';

describe('upperFirst', () => {
  it('changes the first character of a string to upper case', () => {
    expect(upperFirst('hello there')).toBe('Hello there');
  });
});
