import React, { useState } from 'react';

import { calculatePageNumbers } from './helper';

export type PaginatorProps = {
  /**
   * Total pages count
   */
  totalPages: number;
  /**
   * It will set the initial page where the paginator will position at the beginning
   */
  currentPage?: number;
  /**
   * Class name that will apply the style to the current page
   */
  currentPageClassName?: string;
  /**
   * Class name to style the outer container
   */
  paginatorClassName?: string;
  /**
   * Allow to pass a custom component to define the previous button
   */
  previousButton?: JSX.Element | string;
  /**
   * It will allow to style the container of the previous button
   */
  previousButtonClassName?: string;
  /**
   * Allow to pass a custom component to define the next button
   */
  nextButton?: JSX.Element | string;
  /**
   * It will allow to style the container of the next button
   */
  nextButtonClassName?: string;
  /**
   * It will allow to style every single page number
   */
  pageNumbersClassName?: string;
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  sibilingCount?: number;
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * Callback function that is triggered when the page changes and returns the updated current page
   */
  onPageChange?: (page: number) => void;
};

export const Paginator: React.FC<PaginatorProps> = ({
  totalPages,
  currentPage = 1,
  paginatorClassName,
  currentPageClassName,
  previousButton = 'Prev',
  nextButton = 'Next',
  pageNumbersClassName,
  previousButtonClassName,
  nextButtonClassName,
  sibilingCount = 1,
  boundaryCount = 1,
  onPageChange,
}: PaginatorProps): JSX.Element => {
  const [current, setCurrent] = useState<number>(currentPage);

  const pages = calculatePageNumbers(
    current,
    totalPages,
    sibilingCount,
    boundaryCount
  );

  const handlePageChange = (page: number) => {
    console.log('handlePageChange FROM TABLE', page);
    if (onPageChange) {
      onPageChange(page);
    }
    setCurrent(page);
  };
  return (
    <div className={paginatorClassName}>
      <button
        type="button"
        className={previousButtonClassName}
        onClick={() => {
          handlePageChange(current - 1);
        }}
        disabled={current < 2}
        data-testid="prev-btn"
      >
        {previousButton}
      </button>

      {pages.map((page: number | string, index: number) =>
        typeof page === 'number' ? (
          <div
            key={index}
            className={
              page === current
                ? `${pageNumbersClassName} ${currentPageClassName}`
                : pageNumbersClassName
            }
            onClick={() => handlePageChange(page)}
          >
            {page}
          </div>
        ) : (
          <span className={pageNumbersClassName} key={index}>
            {page}
          </span>
        )
      )}

      <button
        className={nextButtonClassName}
        onClick={() => {
          if (current < totalPages) {
            handlePageChange(current + 1);
          }
        }}
        disabled={current >= totalPages}
        data-testid="next-btn"
      >
        {nextButton}
      </button>
    </div>
  );
};
