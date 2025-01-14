import BadgeLive from '../liveEdit/BadgeLive';
import { Badge } from '../../src/badge/Badge';

export default {
  title: 'DCXLibrary/Form/Badge/Live',
  component: Badge,

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
  render: () => <BadgeLive />,
};
