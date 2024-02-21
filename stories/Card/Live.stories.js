import CardLive from '../liveEdit/CardLive';
import { Card } from '../../src/card';

export default {
  title: 'DCXLibrary/Layout/Card/Live',
  component: Card,

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
  render: () => <CardLive />,
};
