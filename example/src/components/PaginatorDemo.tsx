import React, { ReactElement } from 'react';

import { Paginator } from '@capgeminiuk/dcx-react-library';

export const PaginatorDemo: React.FC<ReactElement> = () => {
  return (
    <Paginator
      currentPage={{ page: 3, className: 'current-page' }}
      nextButton={{ text: 'Next >', className: 'next-button' }}
      previousButton={{ text: '< Previous', className: 'previous-button' }}
      totalPages={10}
      paginatorSectionClassName="paginator-container"
      paginatorClassName="paginator"
      pageNumbersClassName="buttons"
    />
  );
};

export default PaginatorDemo;
