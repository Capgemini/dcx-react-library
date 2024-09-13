export const calculatePageNumbers = (
  currentPage: number,
  totalPages: number,
  startElipseFromPage: number = 5
): (number | string)[] => {
  const pageNumbers: (number | string)[] = [];
  const firstPage = 1;
  const lastPage = totalPages;

  if (totalPages <= 1) return [firstPage];

  pageNumbers.push(firstPage);

  if (totalPages <= startElipseFromPage) {
    for (let i = 2; i <= lastPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 2; i <= 4; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('...');
      pageNumbers.push(lastPage);
    } else if (currentPage > 3 && currentPage < lastPage - 2) {
      pageNumbers.push('...');
      pageNumbers.push(currentPage - 1);
      pageNumbers.push(currentPage);
      pageNumbers.push(currentPage + 1);
      pageNumbers.push('...');
      pageNumbers.push(lastPage);
    } else {
      pageNumbers.push('...');
      for (let i = lastPage - 3; i <= lastPage; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return pageNumbers;
};
