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
    paginatorSectionClassName: 'paginator-container',
    paginatorClassName: 'paginator',
    currentPage: 2,
    currentClassName: 'current-page',
    totalPages: 7,
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
