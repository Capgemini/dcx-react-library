import { Paginator } from '../../src/paginator/Paginator';
import PaginatorLive from '../liveEdit/PaginatorLive';

export default {
  title: 'DCXLibrary/Layout/Paginator/Live',
  component: Paginator,

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
  render: () => <PaginatorLive />,
};
