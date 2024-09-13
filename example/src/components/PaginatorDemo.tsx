import React from 'react';

import { Paginator } from '@capgeminiuk/dcx-react-library';

export const PaginatorDemo = () => {
  return (
    <Paginator
      paginatorClassName=""
      currentPage={5}
      currentPageClassName=""
      totalPages={10}
      previousButton={<>Prev</>}
      previousButtonClassName=""
      nextButton={<>Next</>}
      nextButtonClassName=""
      pageNumbersClassName=""
      onPageChange={(page) => {
        alert(page);
        return page;
      }}
    />
  );
};

export default PaginatorDemo;
