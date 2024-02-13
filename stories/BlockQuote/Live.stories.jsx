import BlockquoteLive from '../liveEdit/BlockquoteLive';
import { Blockquote } from '../../src/blockquote/Blockquote';

export default {
  title: 'DCXLibrary/Typography/Blockquote/Live',
  component: Blockquote,

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
  render: () => <BlockquoteLive />
};