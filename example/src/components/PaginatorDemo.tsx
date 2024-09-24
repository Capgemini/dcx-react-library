import React from 'react';
import { Paginator } from '@capgeminiuk/dcx-react-library';
import './paginator.scss';
export const PaginatorDemo = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  return (
    <Paginator
      paginatorClassName="paginator"
      currentPage={5}
      currentPageClassName="current-page"
      totalPages={10}
      previousButton={<>&laquo;</>}
      previousButtonClassName="previous-button"
      nextButton={<>&raquo;</>}
      nextButtonClassName="next-button"
      pageNumbersClassName="buttons"
      onPageChange={(page) => setCurrentPage(page)}
      sibilingCount={3}
    />
  );
};
