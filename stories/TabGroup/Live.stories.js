import { TabGroup } from '../../src/tabGroup';
import TabGroupLive from '../liveEdit/TabGroupLive';
export default {
  title: 'DCXLibrary/Layout/Tabs/Live',
  component: TabGroup,

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
  render: () => <TabGroupLive />,
};
