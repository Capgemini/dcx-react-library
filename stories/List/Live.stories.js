import { List } from '../../src/list/List';
import ListLive from '../liveEdit/ListLive';

export default {
  title: 'DCXLibrary/Typography/List/Live',
  component: List,

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
  render: () => <ListLive />,
};
