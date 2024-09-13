import './style.css';

import { Paginator } from '../../src/paginator/Paginator';

export default {
  title: 'DCXLibrary/Layout/Paginator/Class based',
  component: Paginator,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 2,
    currentPageClassName: 'current-page',
    totalPages: 7,
    previousButton: <>&lt;= Prev</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>Next =&gt;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    onPageChange: (page) => alert(page),
  },
};
