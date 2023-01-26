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

  it('should remove the undefined classNames', () => {
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

  it('should loop through the object and concatenate all the values', () => {
    expect(
      conditionalClassNames(['a', { 'c d': true, 'e f': true }, 'b'])
    ).toBe('a c d e f b');
  });

  it('should loop through the object and concatenate all the values and filter undefined and null', () => {
    expect(
      conditionalClassNames(['a', { 'c undefined': true, 'e null': true }, 'b'])
    ).toBe('a c e b');
  });

  it.only('should loop through the object and concatenate all the values and filter undefined and null and the falsy', () => {
    expect(
      conditionalClassNames([
        'a',
        { 'c undefined': false, 'e null': true },
        'b',
      ])
    ).toBe('a e b');
  });
});
