import { ToolTip } from '../../src/tooltip/Tooltip';
import ToolTipLive from '../liveEdit/ToolTipLive';

export default {
  title: 'DCXLibrary/Form/Tooltip/Live',
  component: ToolTip,

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
  render: () => <ToolTipLive />,
};
