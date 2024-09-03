import '@testing-library/jest-dom';

import { Paginator, PaginatorProps } from '../Paginator';
import { calculatePageNumbers, pageHandler } from '../helper';
import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';

test('calculatePageNumbers returns [1] when totalPages is 1', () => {
  const result = calculatePageNumbers(1, 1);
  expect(result).toEqual([1]);
});

test('calculatePageNumbers returns correct pages when totalPages is less than or equal to 5', () => {
  const result = calculatePageNumbers(2, 5);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('calculatePageNumbers returns correct pages when totalPages > 5 and currentPage is near the start', () => {
  const result = calculatePageNumbers(2, 10);
  expect(result).toEqual([1, 2, 3, 4, '...', 10]);
});

test('calculatePageNumbers returns correct pages when totalPages > 5 and currentPage is near the end', () => {
  const result = calculatePageNumbers(9, 10);
  expect(result).toEqual([1, '...', 7, 8, 9, 10]);
});

test('calculatePageNumbers handles large totalPages correctly', () => {
  const result = calculatePageNumbers(50, 100);
  expect(result).toEqual([1, '...', 49, 50, 51, '...', 100]);
});

const renderPaginator = (props: Partial<PaginatorProps> = {}) => {
  const defaultProps: PaginatorProps = {
    paginatorSectionClassName: '',
    paginatorClassName: '',
    currentPage: { page: 1, className: 'current-page' },
    totalPages: 10,
    previousButton: { text: 'Pre', className: 'prev-button' },
    nextButton: { text: 'Next', className: 'next-button' },
    pageNumbersClassName: 'page-number',
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

test('renders paginator with first page active', () => {
  renderPaginator();

  expect(screen.getByText('Pre')).toBeInTheDocument();
  expect(screen.getByText('1')).toHaveClass('current-page');
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('...')).toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeInTheDocument();
});

test('clicking next button moves to the next page', () => {
  renderPaginator();

  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);

  expect(screen.getByText('2')).toHaveClass('current-page');
});
test('clicking Prev button moves to the previous page', () => {
  renderPaginator({
    currentPage: { page: 4, className: 'current-page' },
  });

  const prevButton = screen.getByText('Pre');
  fireEvent.click(prevButton);
  expect(pageHandler).toHaveBeenCalledWith(
    { page: 3, className: 'current-page' },
    expect.any(Function)
  );

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
    currentPage: { page: 10, className: 'current-page' },
  });

  expect(screen.getByText('Pre')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('...')).toBeInTheDocument();
  expect(screen.getByText('7')).toBeInTheDocument();
  expect(screen.getByText('8')).toBeInTheDocument();
  expect(screen.getByText('9')).toBeInTheDocument();
  expect(screen.getByText('10')).toHaveClass('current-page');
  expect(screen.getByText('Next')).toBeInTheDocument();
});

test('clicking previous button when on first page does not change the page', () => {
  renderPaginator();

  const prevButton = screen.getByText('Pre');
  fireEvent.click(prevButton);

  expect(screen.getByText('1')).toHaveClass('current-page');
});

test('clicking next button when on last page does not change the page', () => {
  renderPaginator({
    currentPage: { page: 10, className: 'current-page' },
  });

  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);

  expect(screen.getByText('10')).toHaveClass('current-page');
});
