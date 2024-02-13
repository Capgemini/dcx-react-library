import { Progress } from '../../src/progress/Progress';
import ProgressLive from '../liveEdit/ProgressLive';

export default {
  title: 'DCXLibrary/Form/Progress/Live',
  component: Progress,

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
  render: () => <ProgressLive />
};
