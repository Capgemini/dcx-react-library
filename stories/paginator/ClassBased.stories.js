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
 * Pagination with the values of currentPage = 1, totalPages = 14, sibilingCount = 1 and boundaryCount = 1
 */
export const Basic = {
  name: 'Basic pagination',
  args: {
    totalPages: 14,
    paginatorClassName: 'paginator',
    currentPageClassName: 'current-page',
    previousButtonClassName: 'previous-button',
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
  },
};
/**
In this example when the paginator loads for the first time we select the third page as the default (currentPage).
*/
export const BasicWithCurrentPageThree = {
  name: 'Select the third page when the pagination load',
  args: {
    totalPages: 14,
    paginatorClassName: 'paginator',
    currentPageClassName: 'current-page',
    previousButtonClassName: 'previous-button',
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    currentPage: 3,
  },
};

/**
 * In this example we display the pagination with customs Next (>>) and Prev (<<) buttons (previousButton,nextButton).
 */
export const CustomPrevNextButton = {
  name: 'Pagination with custom buttons',
  args: {
    totalPages: 14,
    paginatorClassName: 'paginator',
    currentPageClassName: 'current-page',
    previousButton: <>&laquo;</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>&raquo;</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
  },
};
/**
 * In this example we display the paginator with 2 siblings (sibilingCount).
 *  When the user select one page it will be displayed the previous and the next 2 pages. 
 * For example if you select 7 the previous pages will be 5 and 6 and the pages after will be 8 and 9.
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
 * In this example we set a custom parameter to set the first two pages (1 and 2) and the last 2 pages (13 and 14) (boundaryCount)
 */
export const BasicWithTwoboundary = {
  name: 'Pagination with 2 boundaries',
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
