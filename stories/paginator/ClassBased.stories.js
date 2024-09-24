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
/**
Pagination with the values of currentPage = 1, totalPages = 14, sibilingCount = 1 and boundaryCount = 1
*/
export const Basic = {
  name: 'Basic pagination',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 1,
    currentPageClassName: 'current-page',
    totalPages: 14,
    previousButtonClassName: 'previous-button',
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 1,
    boundaryCount: 1,
  },
};
/**
Pagination with the custom buttons
*/
export const CustomPrevNextButton = {
  name: 'Pagination with custom buttons',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 1,
    currentPageClassName: 'current-page',
    totalPages: 14,
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 1,
    boundaryCount: 1,
  },
};
/**
Pagination with the values of currentPage = 7, totalPages = 14, sibilingCount = 2 and boundaryCount = 1
*/
export const BasicWithTwoSiblings = {
  name: 'Pagination with 2 siblings',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 7,
    currentPageClassName: 'current-page',
    totalPages: 14,
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 2,
    boundaryCount: 1,
  },
};
/**
Pagination with the values of currentPage = 7, totalPages = 14, sibilingCount = 3 and boundaryCount = 1
*/
export const BasicWithThreeSiblings = {
  name: 'Pagination with 3 siblings',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 7,
    currentPageClassName: 'current-page',
    totalPages: 14,
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 3,
    boundaryCount: 1,
  },
};
/**
Pagination with currentPage set to 3
*/
export const BasicWithCurrentPageThree = {
  name: 'Pagination with current page set to 3',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 3,
    currentPageClassName: 'current-page',
    totalPages: 14,
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 1,
    boundaryCount: 1,
  },
};
/**
Pagination with the values of currentPage = 7, totalPages = 14, sibilingCount = 1 and boundaryCount = 2
*/
export const BasicWithTwoboundary = {
  name: 'Pagination with 2 boundaryCount',
  args: {
    paginatorClassName: 'paginator',
    currentPage: 6,
    currentPageClassName: 'current-page',
    totalPages: 14,
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 1,
    boundaryCount: 2,
  },
};
