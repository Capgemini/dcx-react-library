import React from 'react';
import '@testing-library/jest-dom';

import { Paginator, PaginatorProps } from '../Paginator';
import { fireEvent, render, screen } from '@testing-library/react';

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
describe('Paginator', () => {
  it('should render paginator with first page active and previous button is disabled', () => {
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

  it('should moves to the next page clicking next button', () => {
    renderPaginator();

    const nextButton = screen.getByTestId('next-btn');
    fireEvent.click(nextButton);

    expect(screen.getByText('2')).toHaveClass('current-page');
  });
  it('should moves to the previous page clicking previous button', () => {
    renderPaginator({
      currentPage: 4,
    });

    const prevButton = screen.getByTestId('prev-btn');
    fireEvent.click(prevButton);

    expect(screen.getByText('3')).toHaveClass('current-page');
  });

  it('should updates the active page clicking on a specific page number ', () => {
    renderPaginator();

    const pageThree = screen.getByText('3');
    fireEvent.click(pageThree);

    expect(pageThree).toHaveClass('current-page');
  });

  it('should renders paginator with last page active', () => {
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

  it('should show the previous button disabled if current page is 1', () => {
    renderPaginator();

    const prevButton = screen.getByTestId('prev-btn');
    expect(prevButton).toBeDisabled();
    fireEvent.click(prevButton);

    expect(screen.getByText('1')).toHaveClass('current-page');
  });

  it('should show the next button disabled if current page equals to the last page', () => {
    renderPaginator({
      currentPage: 15,
    });

    const nextButton = screen.getByTestId('next-btn');
    expect(nextButton).toBeDisabled();
    fireEvent.click(nextButton);

    expect(screen.getByText('15')).toHaveClass('current-page');
  });
  it('should call onPageChange with the correct page number', () => {
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
  it('should default sate sets to 1 if currentPage props is undefined, ', () => {
    renderPaginator({ currentPage: undefined });
    expect(screen.getByText('1')).toHaveClass('current-page');
  });
});
