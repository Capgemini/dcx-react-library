import { FormSelect } from '../../src/formSelect/FormSelect';
import FormSelectLive from '../liveEdit/FormSelectLive';

export default {
  title: 'DCXLibrary/Form/Select/Live',
  component: FormSelect,

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
  render: () => <FormSelectLive />,
};
