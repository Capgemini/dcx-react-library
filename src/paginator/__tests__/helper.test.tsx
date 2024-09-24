import { calculatePageNumbers } from '../helper';

describe('Helper for Paginator', () => {
  it('should return [1] when currentPage = 1, totalPages = 1, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 1, 1, 1)).toEqual([1]);
  });

  it('should return [1, 2] when currentPage = 1, totalPages = 2, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 2, 1, 1)).toEqual([1, 2]);
  });

  it('should return [1, 2, 3] when currentPage = 1, totalPages = 3, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 3, 1, 1)).toEqual([1, 2, 3]);
  });

  it('should return [1, 2, 3, 4] when currentPage = 1, totalPages = 4, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 4, 1, 1)).toEqual([1, 2, 3, 4]);
  });

  it('should return [1, 2, 3, 4, 5] when currentPage = 1, totalPages = 5, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 5, 1, 1)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return [1, 2, 3, 4, 5, 6] when currentPage = 1, totalPages = 6, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 6, 1, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return [1, 2, 3, 4, 5, 6, 7] when currentPage = 1, totalPages = 7, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 7, 1, 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should return [1, 2, 3, 4, 5, "...", 8] when currentPage = 1, totalPages = 8, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 8, 1, 1)).toEqual([1, 2, 3, 4, 5, '...', 8]);
  });

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] when currentPage = 3, totalPages = 10, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(3, 10, 2, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] when currentPage = 2, totalPages = 10, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(2, 10, 2, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] when currentPage = 9, totalPages = 10, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(9, 10, 2, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, "...", 19, 20] when currentPage = 5, totalPages = 20, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(5, 20, 2, 2)).toEqual([1,2,4,3,5,6,7,8,'...',19,20]);
  });

  it('should return [1, 2, 3, 4] when currentPage = 1, totalPages = 4, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(1, 4, 2, 2)).toEqual([1, 2, 3, 4]);
  });

  it('should return [1, 2, "...", 13, 14, 15, 16, 17, 18, 19, 20] when currentPage = 20, totalPages = 20, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(20, 20, 2, 2)).toEqual([1,2,'...',13,14,15,16,17,18,19,20]);
  });

  it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] when currentPage = 4, totalPages = 10, siblingCount = 2, and boundaryCount = 2', () => {
    expect(calculatePageNumbers(4, 10, 2, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should return [1, 2, 3] when currentPage = 1, totalPages = 3, siblingCount = 1, and boundaryCount = 1', () => {
    expect(calculatePageNumbers(1, 3, 1, 1)).toEqual([1, 2, 3]);
  });
});
