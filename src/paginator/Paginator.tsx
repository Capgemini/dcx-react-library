import React, { useState } from 'react';
import { calculatePageNumbers, pageHandler } from './helper';

export interface IControlButton {
  text: string;
  className: string;
}

export type PaginatorProps = {
  /**
   * Optional CSS class name belongs to section tag(parent) that includes paginator div inside.
   */
  paginatorSectionClassName?: string;
  /**
   * Optional CSS class name for paginator div that can controll the paginator and the buttons inside.
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
   * Previous button object that includes button text and className
   */
  previousButton: IControlButton;
  /**
   * Next button object that includes button text and className
   */
  nextButton: IControlButton;
  /**
   * general className for page number buttons within the paginator component
   */
  pageNumbersClassName?: string;
};

export const Paginator: React.FC<PaginatorProps> = ({
  paginatorSectionClassName,
  paginatorClassName,
  currentPage,
  currentPageClassName,
  totalPages,
  previousButton,
  nextButton,
  pageNumbersClassName,
}: PaginatorProps): JSX.Element => {
  const [current, setCurrent] = useState<number>(currentPage);

  const pages = calculatePageNumbers(current, totalPages);

  return (
    <section className={paginatorSectionClassName}>
      <div className={paginatorClassName}>
        <div
          className={previousButton.className}
          onClick={() => {
            if (current > 1) {
              pageHandler(current - 1, setCurrent);
            }
          }}
        >
          {previousButton.text}
        </div>
        {pages.map((page, index) =>
          typeof page === 'number' ? (
            <div
              key={index}
              className={
                page === current
                  ? `${pageNumbersClassName} ${currentPageClassName}`
                  : pageNumbersClassName
              }
              onClick={() => pageHandler(page, setCurrent)}
            >
              {page}
            </div>
          ) : (
            <span key={index}>{page}</span>
          )
        )}
        <div
          className={nextButton.className}
          onClick={() => {
            if (current < totalPages) {
              pageHandler(current + 1, setCurrent);
            }
          }}
        >
          {nextButton.text}
        </div>
      </div>
    </section>
  );
};
