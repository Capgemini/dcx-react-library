import AbbreviateLive from '../liveEdit/AbbreviateLive';
import { Abbreviate } from '../../src/abbreviate/Abbreviate';

export default {
  title: 'DCXLibrary/Typography/Abbreviate/Live',
  component: Abbreviate,

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
  render: () => <AbbreviateLive />,
};
