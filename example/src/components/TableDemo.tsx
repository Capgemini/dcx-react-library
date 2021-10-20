import React from 'react';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './table.css';
import { Table } from 'dcx-react-library';

interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: JSX.Element;
}

const trProps = [
  {
    'data-testId': 'Hydrogen',
    className: 'errorRow',
  },
  {
    'data-testId': 'Helium',
  },
  {
    'data-testId': 'Lithium',
  },
  {
    'data-testId': 'Beryllium',
  },
  {
    'data-testId': 'Boron',
  },
  {
    'data-testId': 'Carbon',
  },
  {
    'data-testId': 'Nitrogen',
  },
  {
    'data-testId': 'Oxygen',
  },
  {
    'data-testId': 'Fluorine',
  },
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    position: 3,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 2,
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 3,
    position: 1,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 4,
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 5,
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 6,
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 7,
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 8,
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 9,
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    actions: (
      <>
        <button
          className="btn btn-primary"
          name="add"
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button className="btn btn-danger" name="delete">
          Delete
        </button>
      </>
    ),
  },
  {
    id: 10,
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    actions: (
      <button
        className="btn btn-primary"
        name="add"
        style={{ marginRight: '5px' }}
      >
        Add
      </button>
    ),
  },
];

export const TableDemo = () => {
  const [data, setData] = React.useState(ELEMENT_DATA);

  const [populateData, setPopulatedData] = React.useState<any[]>([]);

  //@ts-ignore
  const handleSelect = (row) => {
    alert(row);
  };
  const handleCellClick = (evt: any, value: any) => {
    if (evt.target.name === 'delete') {
      setData(data.filter((v) => v.id !== value.id));
    } else if (evt.target.name === 'edit') {
      alert(`Values: ${value}`);
    }
  };

  const handlePopulateData = () => {
    setPopulatedData(ELEMENT_DATA);
  };

  return (
    <div className="App">
      <h1>Basic</h1>
      <Table
        dataSource={data}
        columnsToOmit={['symbol']}
        onSelect={handleSelect}
        handleCellClick={handleCellClick}
        tableClassName="table"
        theadClassName="thead"
        trClassName="header-row"
        thClassName="th"
        tbodyClassName="tbody"
        tdClassName="td"
        selectedRowClassName="trSelected"
        columnsWidth={['100px']}
      />
      <h1>With order</h1>
      <Table
        dataSource={data}
        columnsToOmit={['symbol']}
        onSelect={handleSelect}
        handleCellClick={handleCellClick}
        tableClassName="table"
        theadClassName="thead"
        trClassName="header-row"
        thClassName="th"
        tbodyClassName="tbody"
        tdClassName="td"
        selectedRowClassName="trSelected"
        withOrderBy={true}
        sortAscIcon={
          <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: '4px' }} />
        }
        sortDescIcon={
          <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '4px' }} />
        }
        columnsWidth={['100px']}
      />
      <h1>With search and order</h1>
      <Table
        dataSource={data}
        columnsToOmit={['symbol']}
        onSelect={handleSelect}
        handleCellClick={handleCellClick}
        tableClassName="table"
        theadClassName="thead"
        trClassName="header-row"
        thClassName="th"
        tbodyClassName="tbody"
        tdClassName="td"
        selectedRowClassName="trSelected"
        withSearch={true}
        searchProps={{
          placeholder: 'Filter values...',
          className: 'searchInput',
        }}
        withOrderBy={true}
        sortAscIcon={
          <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: '4px' }} />
        }
        sortDescIcon={
          <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '4px' }} />
        }
        columnsWidth={['100px']}
      />

      <h1>Empty table</h1>
      <Table
        dataSource={populateData}
        customHeaderLabels={[
          { label: 'Test', data: 'id' },
          { label: 'position', data: 'position' },
          { label: 'name', data: 'name' },
          { label: 'weight', data: 'weight' },
          { label: 'symbol', data: 'symbol' },
          { label: 'actions', data: 'actions' },
        ]}
        onSelect={handleSelect}
        handleCellClick={handleCellClick}
        tableClassName="table"
        theadClassName="thead"
        trClassName="header-row"
        thClassName="th"
        tbodyClassName="tbody"
        tdClassName="td"
        selectedRowClassName="trSelected"
        withSearch={true}
        searchProps={{
          placeholder: 'Filter values...',
          className: 'searchInput',
        }}
        withOrderBy={true}
        sortAscIcon={
          <FontAwesomeIcon icon={faArrowUp} style={{ marginLeft: '4px' }} />
        }
        sortDescIcon={
          <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '4px' }} />
        }
        columnsWidth={['100px']}
      />
      <button onClick={handlePopulateData}>Populate</button>

      <h1>With custom Id for each row</h1>
      <Table
        dataSource={data}
        columnsToOmit={['symbol']}
        onSelect={handleSelect}
        handleCellClick={handleCellClick}
        tableClassName="table"
        theadClassName="thead"
        trClassName="header-row"
        thClassName="th"
        tbodyClassName="tbody"
        tdClassName="td"
        selectedRowClassName="trSelected"
        columnsWidth={['100px']}
        trProps={trProps}
      />
    </div>
  );
};
