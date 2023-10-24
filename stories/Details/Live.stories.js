import { Details } from '../../src/details/Details';
import DetailsLive from '../liveEdit/DetailsLive';

export default {
  title: 'DCXLibrary/Layout/Details/Live',
  component: Details,

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
  render: () => <DetailsLive />
};