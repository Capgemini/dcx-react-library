import { CheckboxGroup } from '../../src/checkboxGroup/CheckboxGroup';
import CheckboxGroupLive from '../liveEdit/CheckboxGroupLive';

export default {
  title: 'DCXLibrary/Form/CheckboxGroup/Live',
  component: CheckboxGroup,

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
  render: () => <CheckboxGroupLive />
}