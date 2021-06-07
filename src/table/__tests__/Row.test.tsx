import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Row } from '../Row';

const values = [1, 3];

const DummyRow = ({ onSelect }: any) => (
  <table>
    <tbody>
      <Row
        values={values}
        onSelect={onSelect}
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
});
