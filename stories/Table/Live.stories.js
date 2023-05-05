import { Table } from '../../src/table/Table';
import TableLive from '../liveEdit/TableLive';

export default {
  title: 'DCXLibrary/Table/Live',
  component: Table,

  parameters: {
    options: {
      showPanel: false,
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Live = {
  render: () => <TableLive />
};
