import { omit } from '../omit';

describe('omit', () => {
  it('should return a new object with the specified values omitted', () => {
    const originalObject = {
      name: 'Archie',
      age: 12,
      species: 'dog',
      colour: 'white',
      enemy: 'Eddie',
    };

    const toOmit = ['species', 'enemy'];

    const expectedObject = {
      name: 'Archie',
      age: 12,
      colour: 'white',
    };

    expect(omit(originalObject, toOmit)).toStrictEqual(expectedObject);
  });
});
