import { MultiSelect } from '../../src/multiSelect/MultiSelect';

export default {
  title: 'DCXLibrary/Form/MultiSelect/Without style',
  component: MultiSelect,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    selectOptions: [
      { label: 'option 1 label', value: 'option 1 value' },
      { label: 'option 2 label', value: 'option 2 value' },
      { label: 'option 3 label', value: 'option 3 value' },
    ],
  },
};
