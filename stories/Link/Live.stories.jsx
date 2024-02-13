import { Link } from '../../src/link/Link';
import LinkLive from '../liveEdit/LinkLive';

export default {
  title: 'DCXLibrary/Typography/Link/Live',
  component: Link,

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
  render: () => <LinkLive />,
};
