import { FormDate } from '../../src/formDate/FormDate';
import FormDateLive from '../liveEdit/FormDateLive';

export default {
  title: 'DCXLibrary/Form/Date/Live',
  component: FormDate,

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
  render: () => <FormDateLive />
};

