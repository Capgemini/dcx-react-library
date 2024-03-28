import { Autocomplete } from '../../src/autocomplete/Autocomplete';
import AutocompleteLive from '../liveEdit/AutocompleteLive';

export default {
  title: 'DCXLibrary/Form/Autocomplete/Live',
  component: Autocomplete,

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
  render: () => <AutocompleteLive />,
};
