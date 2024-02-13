import { PreformattedText } from '../../src/preformattedText/PreformattedText';
import PreformattedTextLive from '../liveEdit/PreformattedTextLive';

export default {
  title: 'DCXLibrary/Typography/PreformattedText/Live',
  component: PreformattedText,

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
  render: () => <PreformattedTextLive />,
};
