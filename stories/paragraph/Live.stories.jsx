import ParagraphLive from '../liveEdit/ParagraphLive';
import { Paragraph } from '../../src/paragraph/Paragraph';

export default {
  title: 'DCXLibrary/Typography/Paragraph/Live',
  component: Paragraph,

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