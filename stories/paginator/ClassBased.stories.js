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
    totalPages: 14,
    previousButtonClassName: 'previous-button',
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'buttons',
    sibilingCount: 1,
    boundryCount: 2,
  },
};

export const CustomPrevNextButton = {
  name: 'CustomPrevNextButton',
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
    boundryCount: 2,
  },
};

export const BasicWithTwoSiblings = {
  name: 'Basic with 2 siblings',
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
    boundryCount: 2,
  },
};
export const BasicWithThreeSiblings = {
  name: 'Basic with 3 siblings',
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
    sibilingCount: 3,
    boundryCount: 2,
  },
};
export const BasicWithCurrentPageThree = {
  name: 'Basic with current page set to 3',
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
    boundryCount: 2,
  },
};
