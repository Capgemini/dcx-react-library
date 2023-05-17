import { InsertText } from '../../src/insertText/InsertText';
import InsertTextLive from '../liveEdit/InsertTextLive';

export default {
  title: 'DCXLibrary/Form/InsertText/live',
  component: InsertText,

  parameters: {
    options: {
      showPanel: false,
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

export const Live = {
  render: () => <InsertTextLive />,
};
