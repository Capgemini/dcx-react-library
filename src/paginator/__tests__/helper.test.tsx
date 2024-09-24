import { calculatePageNumbers } from '../helper';

describe('Helper for Paginator', () => {
  test('calculatePageNumbers generates correct page numbers', () => {
    expect(calculatePageNumbers(1, 1, 1, 1)).toEqual([1]);
    expect(calculatePageNumbers(1, 2, 1, 1)).toEqual([1, 2]);
    expect(calculatePageNumbers(1, 3, 1, 1)).toEqual([1, 2, 3]);
    expect(calculatePageNumbers(1, 4, 1, 1)).toEqual([1, 2, 3, 4]);
    expect(calculatePageNumbers(1, 5, 1, 1)).toEqual([1, 2, 3, 4, 5]);
    expect(calculatePageNumbers(1, 6, 1, 1)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(calculatePageNumbers(1, 7, 1, 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(calculatePageNumbers(1, 8, 1, 1)).toEqual([1, 2, 3, 4, 5, '...', 8]);
    expect(calculatePageNumbers(3, 10, 2, 2)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(calculatePageNumbers(2, 10, 2, 2)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(calculatePageNumbers(9, 10, 2, 2)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(calculatePageNumbers(5, 20, 2, 2)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      '...',
      19,
      20,
    ]);
    expect(calculatePageNumbers(1, 4, 2, 2)).toEqual([1, 2, 3, 4]);
    expect(calculatePageNumbers(20, 20, 2, 2)).toEqual([
      1,
      2,
      '...',
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
    expect(calculatePageNumbers(4, 10, 2, 2)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(calculatePageNumbers(1, 3, 1, 1)).toEqual([1, 2, 3]);
  });
});
