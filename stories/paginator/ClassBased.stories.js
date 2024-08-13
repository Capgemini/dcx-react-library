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
    paginatorClassName: 'paginator-container',
    currentPage: {
      page: 7,
      className: 'current-page',
    },
    totalPages: 10,
    previousButton: {
      text: '< Previous ',
      className: 'previous-button',
    },
    nextButton: {
      text: 'Next >',
      className: 'next-button',
    },
    pageNumbersClassName: 'buttons',
  },
};
