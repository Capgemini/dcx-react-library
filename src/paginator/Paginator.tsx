import React, { useState } from 'react';

import { calculatePageNumbers } from './helper';

export type PaginatorProps = {
  /**
   * Class name to style the outer container
   */
  paginatorClassName?: string;
  /**
   * It will set the initial page where the paginator will position at the beginning
   */
  currentPage: number;
  /**
   * Class name that will apply the style to the current page
   */
  currentPageClassName?: string;
  /**
   * Total pages count
   */
  totalPages: number;
  /**
   * Allow to pass a custom component to define the previous button
   */
  previousButton: JSX.Element;
  /**
   * Allow to pass a custom component to define the next button
   */
  nextButton: JSX.Element;
  /**
   * It will allow to style the container of the next button
   */
  nextButtonClassName?: string;
  /**
   * It will allow to style the container of the previous button
   */
  previousButtonClassName?: string;
  /**
   * It will allow to style every single page number
   */
  pageNumbersClassName?: string;

  /**
   * Callback function that is triggered when the page changes and returns the updated current page
   */
  onPageChange?: (page: number) => void;

  /**
   * The page number that elipses will be shown from. By default it's set to 5
   */
  startElipseFromPage: number;
};

export const Paginator: React.FC<PaginatorProps> = ({
  paginatorClassName,
  currentPage,
  currentPageClassName,
  totalPages,
  previousButton,
  nextButton,
  pageNumbersClassName,
  previousButtonClassName,
  nextButtonClassName,
  startElipseFromPage = 5,
  onPageChange,
}: PaginatorProps): JSX.Element => {
  const [current, setCurrent] = useState<number>(currentPage || 1);

  const pages = calculatePageNumbers(current, totalPages, startElipseFromPage);
  const handlePageChange = (page: number) => {
    setCurrent(page);
    if (onPageChange) {
      onPageChange(page);
    }
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
