import React from 'react';
import '@testing-library/jest-dom';

import { Paginator, PaginatorProps } from '../Paginator';
import { fireEvent, render, screen } from '@testing-library/react';

import { calculatePageNumbers } from '../helper';

test('calculatePageNumbers returns [1] when totalPages is 1', () => {
  const result = calculatePageNumbers(1, 1, 1);
  expect(result).toEqual([1]);
});

test('calculatePageNumbers returns correct pages when totalPages is less than or equal to 5', () => {
  const result = calculatePageNumbers(2, 5, 5);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('calculatePageNumbers returns correct pages when totalPages > 5 and currentPage is near the start', () => {
  const result = calculatePageNumbers(2, 10, 5);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, '...', 10]);
});

test('calculatePageNumbers returns correct pages when totalPages > 5 and currentPage is near the end', () => {
  const result = calculatePageNumbers(9, 10, 5);
  expect(result).toEqual([1, '...', 6, 7, 8, 9, 10]);
});
test('calculatePageNumbers returns correct pages when totalPages / startElipseFromPage === 2 and currentPage === startElipseFromPage ', () => {
  const result = calculatePageNumbers(9, 18, 9);
  expect(result).toEqual([1, '...', 8, 9, 10, '...', 18]);
});

test('calculatePageNumbers handles large totalPages correctly', () => {
  const result = calculatePageNumbers(50, 100, 5);
  expect(result).toEqual([1, '...', 49, 50, 51, '...', 100]);
});
test('calculatePageNumbers generates correct page numbers', () => {
  expect(calculatePageNumbers(2, 4, 4)).toEqual([1, 2, 3, 4]);
  expect(calculatePageNumbers(1, 4, 4)).toEqual([1, 2, 3, 4]);
  expect(calculatePageNumbers(2, 4, 0)).toEqual([1, 2, 3, 4]);
  expect(calculatePageNumbers(2, 5, 4)).toEqual([1, 2, 3, 4, 5]);
  expect(calculatePageNumbers(1, 5, 4)).toEqual([1, 2, 3, 4, 5]);
  expect(calculatePageNumbers(1, 5, 8)).toEqual([1, 2, 3, 4, 5]);
  expect(calculatePageNumbers(2, 5, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(calculatePageNumbers(5, 5, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(calculatePageNumbers(1, 8, 4)).toEqual([1, 2, 3, 4, 5, '...', 8]);
  expect(calculatePageNumbers(2, 8, 5)).toEqual([1, 2, 3, 4, 5, 6, '...', 8]);
  expect(calculatePageNumbers(4, 8, 4)).toEqual([1, '...', 3, 4, 5, '...', 8]);
  expect(calculatePageNumbers(2, 8, 8)).toEqual([1, 2, 3, 4, 5, '...', 8]);
  expect(calculatePageNumbers(2, 4, 1)).toEqual([1, 2, 3, 4]);
  expect(calculatePageNumbers(2, 9, 4)).toEqual([1, 2, 3, 4, '...', 9]);
  expect(calculatePageNumbers(6, 9, 2)).toEqual([1, '...', 5, 6, 7, '...', 9]);
  expect(calculatePageNumbers(3, 9, 4)).toEqual([1, '...', 5, 6, 7, '...', 9]);
  expect(calculatePageNumbers(2, 9, 3)).toEqual([1, '...', 5, 6, 7, '...', 9]);
  expect(calculatePageNumbers(4, 9, 4)).toEqual([1, '...', 5, 6, 7, '...', 9]);

  expect(calculatePageNumbers(6, 9, 5)).toEqual([1, '...', 5, 6, 7, '...', 9]);

  expect(calculatePageNumbers(5, 9, 4)).toEqual([1, '...', 4, 5, 6, '...', 9]);
  expect(calculatePageNumbers(4, 9, 4)).toEqual([1, '...', 3, 4, 5, '...', 9]);
  expect(calculatePageNumbers(50, 100, 20)).toEqual([
    1,
    '...',
    49,
    50,
    51,
    '...',
    100,
  ]);
  expect(calculatePageNumbers(50, 100, 50)).toEqual([
    1,
    '...',
    49,
    50,
    51,
    '...',
    100,
  ]);
  expect(calculatePageNumbers(70, 100, 51)).toEqual([
    1,
    '...',
    69,
    70,
    71,
    '...',
    100,
  ]);
  expect(calculatePageNumbers(100, 100, 49)).toEqual([
    1,
    '...',
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
  ]);
  expect(calculatePageNumbers(4, 9, 4)).toEqual([1, '...', 3, 4, 5, '...', 9]);
});
const renderPaginator = (props: Partial<PaginatorProps> = {}) => {
  const defaultProps: PaginatorProps = {
    paginatorClassName: '',
    currentPage: 1,
    currentPageClassName: 'current-page',
    totalPages: 10,
    previousButton: <>Prev</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>Next</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'page-number',
    startElipseFromPage: 5,
    onPageChange: (page: number) => alert(page),
  };
  return render(<Paginator {...defaultProps} {...props} />);
};
jest.mock('../helper', () => ({
  ...jest.requireActual('../helper'),
  pageHandler: jest.fn((currentPage, setCurrent) => {
    setCurrent(currentPage);
    return currentPage.page;
  }),
}));

test('renders paginator with first page active and previous button is disabled', () => {
  renderPaginator();

  expect(screen.getByTestId('prev-btn')).toBeInTheDocument();
  expect(screen.getByText('1')).toHaveClass('current-page');
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('...')).toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
  expect(screen.getByTestId('next-btn')).toBeInTheDocument();
  expect(screen.getByTestId('prev-btn')).toBeDisabled();
  expect(screen.getByTestId('next-btn')).not.toBeDisabled();
});

test('clicking next button moves to the next page', () => {
  renderPaginator();

  const nextButton = screen.getByTestId('next-btn');
  fireEvent.click(nextButton);

  expect(screen.getByText('2')).toHaveClass('current-page');
});
test('clicking Prev button moves to the previous page', () => {
  renderPaginator({
    currentPage: 4,
  });

  const prevButton = screen.getByTestId('prev-btn');
  fireEvent.click(prevButton);

  expect(screen.getByText('3')).toHaveClass('current-page');
});

test('clicking on a specific page number updates the active page', () => {
  renderPaginator();

  const pageThree = screen.getByText('3');
  fireEvent.click(pageThree);

  expect(pageThree).toHaveClass('current-page');
});

test('renders paginator with last page active', () => {
  renderPaginator({
    currentPage: 10,
  });

  expect(screen.getByTestId('prev-btn')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('...')).toBeInTheDocument();
  expect(screen.getByText('7')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
  expect(screen.getByText('9')).toBeInTheDocument();
  expect(screen.getByText('10')).toHaveClass('current-page');
  expect(screen.getByTestId('next-btn')).toBeInTheDocument();
});

test('Previous button is disabled if current page equals to the first page', () => {
  renderPaginator();

  const prevButton = screen.getByTestId('prev-btn');
  expect(prevButton).toBeDisabled();
  fireEvent.click(prevButton);

  expect(screen.getByText('1')).toHaveClass('current-page');
});

test('Next button is disabled if current page equals to the last page', () => {
  renderPaginator({
    currentPage: 10,
  });

  const nextButton = screen.getByTestId('next-btn');
  expect(nextButton).toBeDisabled();
  fireEvent.click(nextButton);

  expect(screen.getByText('10')).toHaveClass('current-page');
});
test('calls onPageChange with the correct page number', () => {
  const onPageChangeMock = jest.fn();
  renderPaginator({
    currentPage: 2,
    totalPages: 5,
    previousButton: <button>Previous</button>,
    nextButton: <button>Next</button>,
    onPageChange: onPageChangeMock,
  });

  const previousButton = screen.getByText('Previous');
  fireEvent.click(previousButton);
  expect(onPageChangeMock).toHaveBeenCalledWith(1);
});
test('If currentPage props is undefined, default sate sets to 1', () => {
  renderPaginator({ currentPage: undefined });
  expect(screen.getByText('1')).toHaveClass('current-page');
});
