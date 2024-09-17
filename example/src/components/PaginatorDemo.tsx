import React from 'react';
import { Paginator } from '@capgeminiuk/dcx-react-library';
import './paginator.scss';
export const PaginatorDemo = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const pages: number[] = Array.from(Array(25).keys());

  const renderPageItems = () => {
    const itemsToShow = pages.slice((currentPage - 1) * 5, currentPage * 5);
    return itemsToShow.map((item: number, index: number) => (
      <div key={index}>{item}</div>
    ));
  };

  return (
    <Paginator
      paginatorClassName="paginator"
      currentPage={5}
      currentPageClassName="current-page"
      totalPages={10}
      previousButton={<>Prev</>}
      previousButtonClassName="previous-button"
      nextButton={<>Next</>}
      nextButtonClassName="next-button"
      pageNumbersClassName="buttons"
      onPageChange={(page) => setCurrentPage(page)}
      startElipseFromPage={5}
    />
  );
};
