import './style.css';

import { Paginator } from '../../src/paginator/Paginator';
/**
 * In this section we're using the Paginator component passing the relative className. Feel free to use your own css to style it as you prefer.
 */
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
    currentPage: 1,
    currentPageClassName: 'current-page',
    totalPages: 9,
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    onPageChange: (page) => page
  },
};
