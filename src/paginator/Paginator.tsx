import React, { useState } from 'react';

import { pageHandler } from './helper';

interface IControlButton {
  text: string;
  className: string;
}
export interface ICurrentButton {
  page: number;
  className: string;
}
type PaginatorProps = {
  /**
   * Optional CSS class names
   */
  paginatorClassName?: string;
  /**
   * Current page number
   */
  currentPage: ICurrentButton;
  /**
   * Total pages count
   */
  totalPages: number;
  /**
   * Previous button text
   */
  previousButton: IControlButton;
  /**
   * Next button text
   */
  nextButton: IControlButton;
  /**
   * general className for page number buttons within the paginator component
   */
  pageNumbersClassName?: string;
};

export const Paginator: React.FC<PaginatorProps> = ({
  paginatorClassName,
  currentPage,
  totalPages,
  previousButton,
  nextButton,
  pageNumbersClassName,
}: PaginatorProps): JSX.Element => {
  const [current, setCurrent] = useState<ICurrentButton>(currentPage);

  const calculatePageNumbers = (
    currentPage: number,
    totalPages: number
  ): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    const firstPage = 1;
    const lastPage = totalPages;

    const startPage = Math.max(currentPage - 1, firstPage);
    const endPage = Math.min(currentPage + 1, lastPage);

    if (startPage > firstPage + 1) {
      pageNumbers.push(firstPage, '...');
    } else if (startPage === firstPage + 1) {
      pageNumbers.push(firstPage);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < lastPage - 1) {
      pageNumbers.push('...', lastPage);
    } else if (endPage === lastPage - 1) {
      pageNumbers.push(lastPage);
    }

    return pageNumbers;
  };

  const pages = calculatePageNumbers(current.page, totalPages);
  console.log(pages[0]);
  return (
    <section className={paginatorClassName}>
      <div className={previousButton.className}>{previousButton.text}</div>
      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <div
            key={index}
            className={
              page === current.page
                ? `${pageNumbersClassName} ${current.className}`
                : pageNumbersClassName
            }
            onClick={() =>
              pageHandler({ page, className: 'current-page' }, setCurrent)
            }
          >
            {page}
          </div>
        ) : (
          <span key={index}>{page}</span>
        )
      )}
      <div className={nextButton.className}>{nextButton.text}</div>
    </section>
  );
};
