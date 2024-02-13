import { MultiSelect } from '../../src/multiSelect/MultiSelect';
import MultiSelectLive from '../liveEdit/MultiSelectLive';

export default {
  title: 'DCXLibrary/Form/MultiSelect/Live',
  component: MultiSelect,

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
  render: () => <MultiSelectLive />
};