import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Row } from '../Row';

const valuesOneButton = [
  1,
  3,
  <button className="btn btn-danger" data-testid="delete-button">
    Delete
  </button>,
];
const valuesMultipleButton = [
  1,
  3,
  <>
    <button className="btn btn-danger" data-testid="delete-button">
      Delete
    </button>
    <button className="btn btn-danger" data-testid="edit-button">
      Edit
    </button>
  </>,
];
const rawData = [
  {
    id: 1,
    position: 3,
    actions: <button className="btn btn-danger">Delete</button>,
  },
];

const DummyRow = ({
  values = valuesOneButton,
  onSelect,
  handleCellClick,
}: any) => (
  <table>
    <tbody>
      <Row
        values={values}
        rawData={rawData}
        onSelect={onSelect}
        handleCellClick={handleCellClick}
        trClassName="trClassName"
        tdClassName="tdClassName"
      />
    </tbody>
  </table>
);
describe('Row table', () => {
  it('should render the values', () => {
    render(<DummyRow />);
    const row: any = screen.getAllByRole('row');
    expect(row[1]).toContainHTML('1');
    expect(row[2]).toContainHTML('3');
  });
  it('should render 2 buttons', () => {
    render(<DummyRow values={valuesMultipleButton} />);
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();
    expect(screen.getByTestId('edit-button')).toBeInTheDocument();
  });
  it('should call the onSelect function', () => {
    const handleOnSelect = jest.fn();
    render(<DummyRow onSelect={handleOnSelect} />);
    const row: any = screen.getAllByRole('row')[1];
    fireEvent.click(row);
    expect(handleOnSelect).toHaveBeenCalledTimes(1);
  });

  it('should call the onSelect function', () => {
    const handleOnSelect = jest.fn();
    render(<DummyRow />);
    const row: any = screen.getAllByRole('row')[1];
    fireEvent.click(row);
    expect(handleOnSelect).not.toHaveBeenCalledTimes(1);
  });

  it('should call the handleCellClick function', () => {
    const handleCellClick = jest.fn();
    render(<DummyRow handleCellClick={handleCellClick} />);
    const btn: any = screen.getByTestId('delete-button');
    fireEvent.click(btn);
    expect(handleCellClick).toHaveBeenCalledTimes(1);
  });
});
