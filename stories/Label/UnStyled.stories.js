import { Label } from '../../src/label/Label';

export default {
  title: 'DCXLibrary/Form/Label/Without style',
  component: Label,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    value: 'text',
  },
};
