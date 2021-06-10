import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '../Header';
import '@testing-library/jest-dom';

const values = ['id', 'position', 'actions'];

const DummyComponent = ({ orderClick }: any) => (
  <table>
    <Header
      values={values}
      onClick={orderClick}
      theadClassName="theadClassName"
      trClassName="trClassName"
      thClassName="thClassName"
      keySorted={{ key: 'position', direction: 'descending' }}
      columnsWidth={['10%']}
    />
  </table>
);

const DummyComponentSorted = ({ orderClick, direction }: any) => (
  <table>
    <Header
      values={values}
      onClick={orderClick}
      theadClassName="theadClassName"
      trClassName="trClassName"
      thClassName="thClassName"
      keySorted={{ key: 'position', direction: direction }}
      columnsWidth={['10%']}
      sortAscIcon={<div data-testid="sortAscIcon" />}
      sortDescIcon={<div data-testid="sortDescIcon" />}
    />
  </table>
);

describe('Table header', () => {
  it('should render the header columns', () => {
    render(<DummyComponent />);
    const row: any = screen.getAllByRole('row');

    expect(row[1].innerHTML).toContain('id');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
  });

  it('should apply the className to all the elements', () => {
    const { container } = render(<DummyComponent />);
    expect(container.getElementsByClassName('theadClassName')).toBeDefined();
    expect(container.getElementsByClassName('trClassName')).toBeDefined();
    expect(container.getElementsByClassName('thClassName')).toBeDefined();
  });

  it('should have the first column width of 10%', () => {
    const { container } = render(<DummyComponent />);
    const idColumn: any = container.getElementsByClassName('thClassName')[0];
    expect(idColumn).toHaveStyle({ width: '10%' });
  });

  it('should call the onClick function', () => {
    const orderClickHandler = jest.fn();
    const { container } = render(
      <DummyComponent orderClick={orderClickHandler} />
    );
    const idColumn: any = container.getElementsByClassName('thClassName')[0];
    fireEvent.click(idColumn);
    expect(orderClickHandler).toHaveBeenCalled();
  });

  it('should render the sortIcon descending', () => {
    const orderClickHandler = jest.fn();
    render(
      <DummyComponentSorted
        orderClick={orderClickHandler}
        direction="descending"
      />
    );
    expect(screen.getByTestId('sortDescIcon')).toBeInTheDocument();
  });

  it('should render the sortIcon ascending', () => {
    const orderClickHandler = jest.fn();
    render(
      <DummyComponentSorted
        orderClick={orderClickHandler}
        direction="ascending"
      />
    );
    expect(screen.getByTestId('sortAscIcon')).toBeInTheDocument();
  });
});
