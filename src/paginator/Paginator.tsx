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
  pageNumbersClassName: string;
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
  const pages = Array.from({ length: totalPages }, (_, index) => (
    <div
      className={
        index + 1 === current.page
          ? `${pageNumbersClassName} ${current.className}`
          : pageNumbersClassName
      }
      onClick={() =>
        pageHandler({ page: index + 1, className: 'current-page' }, setCurrent)
      }
    >
      {index + 1}
    </div>
  ));
  return (
    <section className={paginatorClassName}>
      <div className={previousButton.className}>{previousButton.text}</div>
      {pages}
      <div className={nextButton.className}>{nextButton.text}</div>
    </section>
  );
};
