import { Dispatch, SetStateAction } from 'react';

import { ICurrentButton } from './Paginator';

export const pageHandler = (
  page: ICurrentButton,
  setCurrent: Dispatch<SetStateAction<ICurrentButton>>
): number => {
  setCurrent(page);
  return page.page;
};
export const calculatePageNumbers = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  const pageNumbers: (number | string)[] = [];
  const firstPage = 1;
  const lastPage = totalPages;

  if (totalPages <= 1) return [firstPage];

  pageNumbers.push(firstPage);

  if (totalPages <= 5) {
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
