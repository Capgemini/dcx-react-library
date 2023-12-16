import { FormInput } from '../../src/formInput/FormInput';
import FormInputLive from '../liveEdit/FormInputLive';

export default {
  title: 'DCXLibrary/Form/Input/Live',
  component: FormInput,

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
  render: () => <FormInputLive />
};
