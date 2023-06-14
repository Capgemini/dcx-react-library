import { RadioGroup } from '../../src/radioGroup/RadioGroup';
import RadioGroupLive from '../liveEdit/RadioGroupLive';

export default {
  title: 'DCXLibrary/Form/RadioGroup/Live',
  component: RadioGroup,

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
  render: () => <RadioGroupLive />
}