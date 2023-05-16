import { Label } from '../../src/label/Label';
import LabelLive from '../liveEdit/LabelLive';

export default {
  title: 'DCXLibrary/Typography/Label/Live',
  component: Label,

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
  render: () => <LabelLive />,
};
