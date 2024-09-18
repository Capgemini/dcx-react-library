export const calculatePageNumbers = (
  currentPage: number,
  totalPages: number,
  startElipseFromPage: number
): (number | string)[] => {
  const pageNumbers: (number | string)[] = [];
  const firstPage = 1;
  const lastPage = totalPages;

  if (totalPages <= 1) {
    return [firstPage];
  }
  if (
    startElipseFromPage < 4 ||
    startElipseFromPage === totalPages ||
    startElipseFromPage > totalPages
  ) {
    startElipseFromPage = 4;
  }
  if (totalPages - startElipseFromPage === 1) {
    startElipseFromPage -= 1;
  }
  pageNumbers.push(firstPage);
  if (totalPages <= 5) {
    for (let i = 2; i <= lastPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage < startElipseFromPage) {
      for (let i = 2; i <= startElipseFromPage + 1; i++) {
        if (
          typeof i === 'number' &&
          !pageNumbers.includes(i) &&
          lastPage - i > 1
        ) {
          pageNumbers.push(i);
        }
      }

      pageNumbers.push('...');
      pageNumbers.push(lastPage);
    } else if (
      (currentPage > startElipseFromPage && currentPage < lastPage - 2) ||
      (currentPage === startElipseFromPage &&
        totalPages / 2 === startElipseFromPage)
    ) {
      pageNumbers.push('...');
      pageNumbers.push(currentPage - 1);
      pageNumbers.push(currentPage);
      pageNumbers.push(currentPage + 1);
      pageNumbers.push('...');
      pageNumbers.push(lastPage);
    } else {
      pageNumbers.push('...');
      for (let i = lastPage - startElipseFromPage + 1; i <= lastPage; i++) {
        pageNumbers.push(i);
      }
    }
  }

  return pageNumbers;
};
