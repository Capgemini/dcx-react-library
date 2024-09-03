import React, { useState } from 'react';
import { calculatePageNumbers, pageHandler } from './helper';

export interface IControlButton {
  text: string;
  className: string;
}
export interface ICurrentButton {
  page: number;
  className: string;
}
export type PaginatorProps = {
  /**
   * Optional CSS class names
   */
  paginatorSectionClassName?: string;
  /**
   * Optional CSS class names
   */
  paginatorClassName?: string;
  /**
   * Current page object that includes current page number and className
   */
  currentPage: ICurrentButton;
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
  totalPages,
  previousButton,
  nextButton,
  pageNumbersClassName,
}: PaginatorProps): JSX.Element => {
  const [current, setCurrent] = useState<ICurrentButton>(currentPage);

  const pages = calculatePageNumbers(current.page, totalPages);

  return (
    <section className={paginatorSectionClassName}>
      <div className={paginatorClassName}>
        <div
          className={previousButton.className}
          onClick={() => {
            if (current.page > 1) {
              pageHandler(
                { page: current.page - 1, className: currentPage.className },
                setCurrent
              );
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
                page === current.page
                  ? `${pageNumbersClassName} ${current.className}`
                  : pageNumbersClassName
              }
              onClick={() =>
                pageHandler(
                  { page, className: currentPage.className },
                  setCurrent
                )
              }
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
            if (current.page < totalPages) {
              pageHandler(
                { page: current.page + 1, className: currentPage.className },
                setCurrent
              );
            }
          }}
        >
          {nextButton.text}
        </div>
      </div>
    </section>
  );
};
