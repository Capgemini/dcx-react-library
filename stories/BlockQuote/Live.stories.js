import ParagraphLive from '../liveEdit/ParagraphLive';
import { Blockquote } from '../../src/blockquote/Blockquote';

export default {
  title: 'DCXLibrary/Typography/Paragraph/Live',
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
  render: () => <ParagraphLive />
};