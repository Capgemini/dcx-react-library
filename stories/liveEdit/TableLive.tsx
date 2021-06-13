import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { Table } from '../../src/table/Table';

const TableDemo = `
function TableDemo() {
    const ELEMENT_DATA = [
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
      ];  
  const [data, setData] = React.useState(ELEMENT_DATA);

  const handleSelect = row => {
    console.log(row);
  };
  const handleCellClick = (evt, value) => {
    if (evt.target.name === 'delete') {
      setData(data.filter(v => v.id !== value.id));
    } else if (evt.target.name === 'edit') {
      console.log(value);
    }
  };

  return (
    <div className="App">
      <Table
        dataSource={data}
        columnsToOmit={['symbol']}
        onSelect={handleSelect}
        handleCellClick={handleCellClick}
        withSearch={true}
        searchProps={{
          placeholder: 'Search...'
        }}
        sortAscIcon={
          <img src="https://freesvg.org/img/1544644548.png" width="12px" />
        }
        sortDescIcon={
          <img src="https://freesvg.org/img/1544644532.png" width="12px" />
        }
        columnsWidth={['100px']}
      />
    </div>
  );
}`.trim();

const TableLive = () => {
  const scope = { Table };
  return (
    <LiveProvider code={TableDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default TableLive;
