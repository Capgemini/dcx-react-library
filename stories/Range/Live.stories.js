import { Range } from '../../src/range/Range';
import RangeLive from '../liveEdit/RangeLive';

export default {
  title: 'DCXLibrary/Form/Range/Live',
  component: Range,

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
  render: () => <RangeLive />
}