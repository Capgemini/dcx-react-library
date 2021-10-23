import React from 'react';
import { Details, Table } from 'dcx-react-library';

interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: JSX.Element;
}

const data: PeriodicElement[] = [
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

export const DetailsDemo = () => (
  <>
    <h1>Simple Details Component</h1>
    <Details summary="summary headline">detail information to shown</Details>
    <h1>Opened Details Component</h1>
    <Details summary="summary headline" open>
      Opened detail information to shown
    </Details>
    <h1>Deails Component with a table</h1>
    <Details summary="open to view table">
      <Table
        dataSource={data}
        columnsToOmit={['symbol']}
        onSelect={() => {}}
        handleCellClick={() => {}}
        tableClassName="table"
        theadClassName="thead"
        trClassName="header-row"
        thClassName="th"
        tbodyClassName="tbody"
        tdClassName="td"
        selectedRowClassName="trSelected"
        columnsWidth={['100px']}
      />
    </Details>
  </>
);
