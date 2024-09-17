import React, { useState } from 'react';

import { calculatePageNumbers } from './helper';

export type PaginatorProps = {
  /**
   * Class name to style the outer container
   */
  paginatorClassName?: string;
  /**
   * Current page number
   */
  currentPage: number;
  /**
   * Current page className
   */
  currentPageClassName?: string;
  /**
   * Total pages count
   */
  totalPages: number;
  /**
   * Previous button content that reduce the current page count by 1
   */
  previousButton: JSX.Element;
  /**
   * Next button content that increase the current page count by 1
   */
  nextButton: JSX.Element;
  /**
   * Paginator next button className
   */
  nextButtonClassName?: string;
  /**
   * Previous button className
   */
  previousButtonClassName?: string;
  /**
   * General className for page number buttons within the paginator component
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
  startElipseFromPage,
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
      <div
        className={previousButtonClassName}
        onClick={() => {
          if (current > 1) {
            handlePageChange(current - 1);
          }
        }}
      >
        {previousButton}
      </div>
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
          <span key={index}>{page}</span>
        )
      )}
      <div
        className={nextButtonClassName}
        onClick={() => {
          if (current < totalPages) {
            handlePageChange(current + 1);
          }
        }}
      >
        {nextButton}
      </div>
    </div>
  );
};
