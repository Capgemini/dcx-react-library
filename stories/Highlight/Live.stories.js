import HighlightLive from '../liveEdit/HighlightLive';
import { Highlight } from '../../src/highlight/Highlight';

export default {
  title: 'DCXLibrary/Typography/Highlight/Live',
  component: Highlight,

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
  render: () => <HighlightLive />
};
