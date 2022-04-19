import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Table } from '../Table';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

  it('should perform the order', () => {
    render(
      <Table
        dataSource={values}
        selectedRowClassName="selectedRowClassName"
        withOrderBy={true}
      />
    );
    //body
    const { id } = values[0];
    const row: any = screen.getByText(id).closest('tr');
    expect(row.innerHTML).toContain('<span>2</span>');
    //header
    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(row.innerHTML).toContain('<span>1</span>');
  });

  it('should perform the order with short custom headers', () => {
    render(
      <Table
        dataSource={values}
        customHeaderLabels={['Test', 'position', 'actions']}
        selectedRowClassName="selectedRowClassName"
        withOrderBy={true}
      />
    );
    //body
    const { id } = values[0];
    const row: any = screen.getByText(id).closest('tr');
    expect(row.innerHTML).toContain('<span>2</span>');
    //header
    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(row.innerHTML).toContain('<span>1</span>');
  });

  it('should not perform the order when data can not be found', () => {
    render(
      <Table
        dataSource={values}
        customHeaderLabels={[
          { label: 'invalid', data: 'undefined' },
          { label: 'position', data: 'position' },
          { label: 'actions', data: 'actions' },
        ]}
        selectedRowClassName="selectedRowClassName"
        withOrderBy={true}
      />
    );
    //body
    const { id } = values[0];
    const row: any = screen.getByText(id).closest('tr');
    expect(row.innerHTML).toContain('<span>2</span>');
    //header
    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(row.innerHTML).toContain('<span>2</span>');
  });

  it('should allow to search and return 0 elements', () => {
    render(
      <Table
        dataSource={values}
        selectedRowClassName="selectedRowClassName"
        withSearch={true}
      />
    );
    const search = screen.getByRole('textbox');
    userEvent.type(search, '33');
    const row: any = screen.getAllByRole('row');
    expect(row[1].innerHTML).toContain('id');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
    const tbody = screen.getAllByRole('rowgroup');
    expect(tbody[1].children).toHaveLength(0);
  });

  it('should allow to search and return 1 elements', () => {
    render(
      <Table
        dataSource={values}
        selectedRowClassName="selectedRowClassName"
        withSearch={true}
      />
    );
    const search = screen.getByRole('textbox');
    userEvent.type(search, '3');
    const row: any = screen.getAllByRole('row');
    expect(row[1].innerHTML).toContain('id');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
    const tbody = screen.getAllByRole('rowgroup');
    expect(tbody[1].children).toHaveLength(1);
  });

  it('should allow to specify extra properties for the search input', () => {
    render(
      <Table
        dataSource={values}
        selectedRowClassName="selectedRowClassName"
        withSearch={true}
        searchProps={{
          className: 'searchClass',
        }}
      />
    );
    const search = screen.getByRole('textbox');
    expect(search.getAttribute('class')).toBe('searchClass');
  });

  it('should display only the table header if data are not available', () => {
    render(
      <Table
        dataSource={[]}
        customHeaderLabels={[
          { label: 'Test', data: 'id' },
          { label: 'position', data: 'position' },
          { label: 'actions', data: 'actions' },
        ]}
        selectedRowClassName="selectedRowClassName"
        withSearch={true}
      />
    );
    const row: any = screen.getAllByRole('row');
    expect(row[1].innerHTML).toContain('Test');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
    const tbody = screen.getAllByRole('rowgroup');
    expect(tbody[1].children).toHaveLength(0);
  });

  it('should display only the table header', () => {
    render(
      <Table
        dataSource={[]}
        customHeaderLabels={['Test', 'position', 'actions']}
        selectedRowClassName="selectedRowClassName"
        withSearch={true}
      />
    );
    const row: any = screen.getAllByRole('row');
    expect(row[1].innerHTML).toContain('Test');
    expect(row[2].innerHTML).toContain('position');
    expect(row[3].innerHTML).toContain('actions');
    const tbody = screen.getAllByRole('rowgroup');
    expect(tbody[1].children).toHaveLength(0);
  });

  it('should allow to reorder the data if the customHeader is specified', () => {
    render(
      <Table
        dataSource={values}
        customHeaderLabels={[
          { label: 'Test', data: 'id' },
          { label: 'position', data: 'position' },
          { label: 'actions', data: 'actions' },
        ]}
        selectedRowClassName="selectedRowClassName"
        withOrderBy={true}
      />
    );
    //body
    const { id } = values[0];
    const row: any = screen.getByText(id).closest('tr');
    expect(row.innerHTML).toContain('<span>2</span>');
    //header
    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(row.innerHTML).toContain('<span>1</span>');
  });

  it("should not reorder the data if the customHeader specified doesn't have a match data", () => {
    render(
      <Table
        dataSource={values}
        customHeaderLabels={[
          { label: 'Test', data: 'test' },
          { label: 'position', data: 'position' },
          { label: 'actions', data: 'actions' },
        ]}
        selectedRowClassName="selectedRowClassName"
        withOrderBy={true}
      />
    );
    //body
    const { id } = values[0];
    const row: any = screen.getByText(id).closest('tr');
    expect(row.innerHTML).toContain('<span>2</span>');
    //header
    const rows: any = screen.getAllByRole('row');
    const idHeader = rows[0].children[0];
    fireEvent.click(idHeader);
    expect(row.innerHTML).not.toContain('<span>1</span>');
  });
});
