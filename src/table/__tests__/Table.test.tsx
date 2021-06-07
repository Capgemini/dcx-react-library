import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Table } from '../Table';
import '@testing-library/jest-dom';

const values = [
  {
    id: 2,
    position: 3,
    actions: <button className="btn btn-danger">Delete</button>,
  },
  {
    id: 1,
    position: 4,
    actions: <button className="btn btn-danger">Delete</button>,
  },
];

describe('Table', () => {
  it('should render a table', () => {
    render(<Table dataSource={values} />);

    const row: any = screen.getAllByRole('row');
    expect(row[1].innerHTML).toContain('id');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
    values.forEach(({ id, position }: any) => {
      const row: any = screen.getByText(id).closest('tr');
      const utils = within(row);
      expect(utils.getByText(id)).toBeInTheDocument();
      expect(utils.getByText(position)).toBeInTheDocument();
    });
  });

  it('should call the select function', () => {
    render(
      <Table dataSource={values} selectedRowClassName="selectedRowClassName" />
    );
    //body
    const { id } = values[0];
    const row: any = screen.getByText(id).closest('tr');
    expect(row.innerHTML).toContain(2);
    //header
    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(row.innerHTML).toContain(1);
  });
});
