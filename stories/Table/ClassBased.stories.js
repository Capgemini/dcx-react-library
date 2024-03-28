import { Table } from '../../src/table/Table';
import './tableStyle.css';

/**
 * In this section we're using the Table component providing the **material style** passing the relative `className`. Feel free to use your own css and style the Table as you prefer
 */
export default {
  title: 'DCXLibrary/Layout/Table/Class based',
  component: Table,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
      },
    ],
    tableClassName: 'table',
    theadClassName: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
  },
};

export const GovUk = {
  name: 'GovUk',
  args: {
    dataSource: [
      {
        'Month you apply': <b>January</b>,
        'Rate for bicycles': '£85',
        'Rate for vehicles': '£95',
      },
      {
        'Month you apply': <b>February</b>,
        'Rate for bicycles': '£75',
        'Rate for vehicles': '£55',
      },
      {
        'Month you apply': <b>March</b>,
        'Rate for bicycles': '£165',
        'Rate for vehicles': '£125',
      },
    ],
    tableClassName: 'govuk-table ',
    theadClassName: 'govuk-table__head',
    trClassName: 'govuk-table__row',
    thClassName: 'govuk-table__header',
    tbodyClassName: 'govuk-table__body',
    tdClassName: 'govuk-table__cell',
  },
};

export const WidthColumns = {
  name: 'Custom width columns',
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
      },
    ],
    tableClassName: 'table',
    theadClassName: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
    columnsWidth: ['100px', '20%', '30%', '40%'],
  },
};

export const IconSort = {
  name: 'Sorting',
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
      },
    ],
    tableClassName: 'table',
    theadClassName: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
    columnsWidth: ['90px'],
    sortAscIcon: (
      <img src="https://freesvg.org/img/1544644548.png" width="12px" />
    ),
    sortDescIcon: (
      <img src="https://freesvg.org/img/1544644532.png" width="12px" />
    ),
  },
};

export const WithCustomElement = {
  name: 'Custom element',
  render: function ({ onClick, ...args }) {
    const handleCellClick = (evt, value) => {
      if (evt.target.name === 'delete') {
        onClick(evt);
      }
    };
    return <Table {...args} handleCellClick={handleCellClick} />;
  },
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        actions: (
          <button className="btn-danger" name="delete">
            Delete
          </button>
        ),
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        actions: (
          <button className="btn-danger" name="delete">
            Delete
          </button>
        ),
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        actions: (
          <button className="btn-danger" name="delete">
            Delete
          </button>
        ),
      },
    ],
    tableClassName: 'table',
    theadClassName: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
    columnsWidth: ['90px'],
    sortAscIcon: (
      <img src="https://freesvg.org/img/1544644548.png" width="12px" />
    ),
    sortDescIcon: (
      <img src="https://freesvg.org/img/1544644532.png" width="12px" />
    ),
  },
  argTypes: { onClick: { action: 'clicked' } },
};

export const OrderBy = {
  name: 'Order By',
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
      },
    ],
    tableClassName: 'table',
    theadClassName: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
    columnsWidth: ['90px'],
    withOrderBy: true,
    sortAscIcon: (
      <img src="https://freesvg.org/img/1544644548.png" width="12px" />
    ),
    sortDescIcon: (
      <img src="https://freesvg.org/img/1544644532.png" width="12px" />
    ),
  },
};

export const Search = {
  name: 'Search',
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
      },
    ],
    tableClassName: 'table',
    theadClassNam: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
    columnsWidth: ['90px'],
    withSearch: true,
    searchProps: {
      placeholder: 'Search...',
      className: 'searchClass',
    },
  },
};

/**
 * in the following example we display a custom header:
 * **customHeaderLabels:['Test', 'position', 'name', 'weight', 'symbol', 'actions']**
 */
export const CustomHeader = {
  name: 'Custom Header',
  args: {
    dataSource: [
      {
        id: 1,
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
      },
      {
        id: 2,
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
      },
      {
        id: 3,
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
      },
    ],
    customHeaderLabels: [
      'Test',
      'position',
      'name',
      'weight',
      'symbol',
      'actions',
    ],
    tableClassName: 'table',
    theadClassName: 'thead',
    trClassName: 'header-row',
    thClassName: 'th',
    tbodyClassName: 'tbody',
    tdClassName: 'td',
    selectedRowClassName: 'trSelected',
    columnsWidth: ['90px'],
    withSearch: true,
    searchProps: {
      placeholder: 'Search...',
      className: 'searchClass',
    },
  },
};
