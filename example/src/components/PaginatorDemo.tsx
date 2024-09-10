import React, { ReactElement } from 'react';

import { Paginator } from '@capgeminiuk/dcx-react-library';

export const PaginatorDemo = () => {
  return (
    <Paginator
      paginatorSectionClassName=""
      paginatorClassName=""
      currentPage={5}
      currentPageClassName=""
      totalPages={10}
      previousButton={<>Prev</>}
      previousButtonClassName=""
      nextButton={<>Next</>}
      nextButtonClassName=""
      pageNumbersClassName=""
      onPageChange={(page: number) => alert(page)}
    />
  );
};

export default PaginatorDemo;
