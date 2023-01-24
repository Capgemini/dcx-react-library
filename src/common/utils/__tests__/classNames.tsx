import { classNames, conditionalClassNames } from '../classNames';

describe('ClassNames', () => {
  it('should concatenates all the classes', () => {
    expect(classNames(['a', 'b', 'c', 'd'])).toBe('a b c d');
  });

  it('should skip undefined or null classes', () => {
    expect(classNames(['a', 'undefined', 'c', 'null'])).toBe('a c');
  });

  it('should skip non string parameters', () => {
    //@ts-ignore
    expect(classNames(['a', undefined, 'c', null])).toBe('a c');
  });

  it('should concatenates conditional classes without conditions', () => {
    expect(conditionalClassNames(['a', 'b', 'c', 'd'])).toBe('a b c d');
  });

  it('should skip undefined or null classes in the concatenates function', () => {
    expect(conditionalClassNames(['a', 'undefined', 'c', 'null'])).toBe('a c');
  });

  it('should skip non string parameters in the concatenates function', () => {
    //@ts-ignore
    expect(conditionalClassNames(['a', undefined, 'c', null])).toBe('a c');
  });

  it('should skip conditional classNames if the value is false', () => {
    expect(conditionalClassNames(['a', { 'c d': false }, 'd'])).toBe('a d');
  });

  it('should skip conditional classNames if the value is undefined', () => {
    expect(conditionalClassNames(['a', { 'c d': undefined }, 'd'])).toBe('a d');
  });

  it.only('should remove the undefined classNames', () => {
    expect(conditionalClassNames(['a', { 'c undefined': true }, 'd'])).toBe(
      'a c d'
    );
  });

  it('should skip conditional classNames if the value is null', () => {
    expect(conditionalClassNames(['a', { 'c d': null }, 'd'])).toBe('a d');
  });

  it('should add conditional classNames if the value is true', () => {
    expect(conditionalClassNames(['a', { 'c d': true }, 'b'])).toBe('a c d b');
  });
});
