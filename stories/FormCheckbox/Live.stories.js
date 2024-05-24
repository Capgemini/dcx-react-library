import { FormCheckbox } from '../../src/formCheckbox/FormCheckbox';
import FormCheckboxLive from '../liveEdit/FormCheckboxLive';

export default {
  title: 'DCXLibrary/Form/Checkbox/Live',
  component: FormCheckbox,

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
  render: () => <FormCheckboxLive />,
};
