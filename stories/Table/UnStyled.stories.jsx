import { Table } from '../../src/table/Table';

export default {
  title: 'DCXLibrary/Layout/Table/Without style',
  component: Table,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    dataSource:[
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
    ]
  },
};