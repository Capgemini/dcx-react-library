import { CopyToClipboard } from '../../src/copyToClipboard/CopyToClipboard';
import CopyToClipboardLive from '../liveEdit/CopyToClipboardLive';

export default {
  title: 'DCXLibrary/Utils/CopyToClipboard/Live',
  component: CopyToClipboard,

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
  render: () => <CopyToClipboardLive />,
};
