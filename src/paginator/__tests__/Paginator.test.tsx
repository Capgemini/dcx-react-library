import React from 'react';
import '@testing-library/jest-dom';

import { Paginator, PaginatorProps } from '../Paginator';
import { fireEvent, render, screen } from '@testing-library/react';

import { calculatePageNumbers } from '../helper';

test('calculatePageNumbers generates correct page numbers', () => {
  expect(calculatePageNumbers(1, 1, 1, 1)).toEqual([1]);
  expect(calculatePageNumbers(1, 2, 1, 1)).toEqual([1, 2]);
  expect(calculatePageNumbers(1, 3, 1, 1)).toEqual([1, 2, 3]);
  expect(calculatePageNumbers(1, 4, 1, 1)).toEqual([1, 2, 3, 4]);
  expect(calculatePageNumbers(1, 5, 1, 1)).toEqual([1, 2, 3, 4, 5]);
  expect(calculatePageNumbers(1, 6, 1, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(calculatePageNumbers(1, 7, 1, 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(calculatePageNumbers(1, 8, 1, 1)).toEqual([1, 2, 3, 4, 5, '...', 8]);
  expect(calculatePageNumbers(3, 10, 2, 2)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(calculatePageNumbers(2, 10, 2, 2)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(calculatePageNumbers(9, 10, 2, 2)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(calculatePageNumbers(5, 20, 2, 2)).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    '...',
    19,
    20,
  ]);
  expect(calculatePageNumbers(1, 4, 2, 2)).toEqual([1, 2, 3, 4]);
  expect(calculatePageNumbers(20, 20, 2, 2)).toEqual([
    1,
    2,
    '...',
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ]);
  expect(calculatePageNumbers(4, 10, 2, 2)).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(calculatePageNumbers(1, 3, 1, 1)).toEqual([1, 2, 3]);
});
const renderPaginator = (props: Partial<PaginatorProps> = {}) => {
  const defaultProps: PaginatorProps = {
    paginatorClassName: '',
    currentPage: 1,
    currentPageClassName: 'current-page',
    totalPages: 15,
    previousButton: <>Prev</>,
    previousButtonClassName: 'previous-button',
    nextButton: <>Next</>,
    nextButtonClassName: 'next-button',
    pageNumbersClassName: 'page-number',
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
  expect(screen.getByText('5')).toBeInTheDocument();
  expect(screen.getByText('...')).toBeInTheDocument();
  expect(screen.getByText('15')).toBeInTheDocument();
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
    currentPage: 15,
  });

  expect(screen.getByTestId('prev-btn')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('...')).toBeInTheDocument();
  expect(screen.getByText('11')).toBeInTheDocument();
  expect(screen.getByText('12')).toBeInTheDocument();
  expect(screen.getByText('13')).toBeInTheDocument();
  expect(screen.getByText('14')).toBeInTheDocument();
  expect(screen.getByText('15')).toHaveClass('current-page');
  expect(screen.getByTestId('next-btn')).toBeInTheDocument();
  expect(screen.getByTestId('next-btn')).toBeDisabled();
});

test('Previous button is disabled if current page is 1', () => {
  renderPaginator();

  const prevButton = screen.getByTestId('prev-btn');
  expect(prevButton).toBeDisabled();
  fireEvent.click(prevButton);

  expect(screen.getByText('1')).toHaveClass('current-page');
});

test('Next button is disabled if current page equals to the last page', () => {
  renderPaginator({
    currentPage: 15,
  });

  const nextButton = screen.getByTestId('next-btn');
  expect(nextButton).toBeDisabled();
  fireEvent.click(nextButton);

  expect(screen.getByText('15')).toHaveClass('current-page');
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
