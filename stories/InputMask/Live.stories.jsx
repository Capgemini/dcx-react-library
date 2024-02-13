import { FormInputMasked } from '../../src/formInput/FormInputMasked';
import FormInputMaskedLive from '../liveEdit/FormInputMaskedLive';

export default {
  title: 'DCXLibrary/Form/InputMasked/Live',
  component: FormInputMasked,

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
  render: () => <FormInputMaskedLive />
};
