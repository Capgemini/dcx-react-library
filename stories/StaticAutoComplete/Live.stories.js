import { StaticAutocomplete } from '../../src/staticAutocomplete';
import StaticAutocompleteLive from '../liveEdit/StaticAutocompleteLive';

export default {
  title: 'DCXLibrary/Form/StaticAutocomplete/Live',
  component: StaticAutocomplete,

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
  render: () => <StaticAutocompleteLive />,
};
