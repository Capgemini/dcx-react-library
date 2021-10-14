import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Body } from '../Body';
import '@testing-library/jest-dom';

const values = [
  {
    id: 1,
    position: 3,
    actions: <button className="btn btn-danger">Delete</button>,
  },
  {
    id: 2,
    position: 4,
    actions: <button className="btn btn-danger">Delete</button>,
  },
];

const trProps = [
  {
    'data-testid': 'Hydrogen',
    className: 'errorRow',
  },
  {
    'data-testid': 'Helium',
  },
];

const DummyComponent = ({ values, onSelect, trProps }: any) => (
  <table>
    <Body
      values={values}
      onSelect={onSelect}
      tbodyClassName="tbodyClassName"
      trClassName="trClassName"
      tdClassName="tdClassName"
      trProps={trProps}
    />
  </table>
);

describe('Table body', () => {
  it('should render the values', () => {
    render(<DummyComponent values={values} />);
    values.forEach(({ id, position }: any) => {
      const row: any = screen.getByText(id).closest('tr');
      const utils = within(row);
      expect(utils.getByText(id)).toBeInTheDocument();
      expect(utils.getByText(position)).toBeInTheDocument();
    });
  });

  it('should call the select function', () => {
    const handleOnSelect = jest.fn();
    render(<DummyComponent values={values} onSelect={handleOnSelect} />);

    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(handleOnSelect).toBeCalled();
  });

  it('should not call the select function', () => {
    const handleOnSelect = jest.fn();
    render(<DummyComponent values={values} onSelect={null} />);

    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(handleOnSelect).not.toBeCalled();
  });

  it('should apply the className to all the elements', () => {
    const { container } = render(<DummyComponent values={values} />);
    expect(container.getElementsByClassName('tbodyClassName')).toBeDefined();
    expect(container.getElementsByClassName('trClassName')).toBeDefined();
    expect(container.getElementsByClassName('tdClassName')).toBeDefined();
  });

  it('should allow to pass extra properties on each row', () => {
    render(<DummyComponent values={values} trProps={trProps} />);
    expect(screen.getByTestId('Hydrogen')).toBeDefined();
  });
});
