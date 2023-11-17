import { Button } from '../../src/button/Button';

export default {
  title: 'DCXLibrary/Form/Button/Without style',
  component: Button,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  argTypes: {
    children: {
      description: 'allows to add an element as children',
    },
  },
};

export const Unstyled = {
  args: {
    label: 'Button',
    children: [
      'This is the simple custom-content of the ',
      <strong>button</strong>,
    ],
  },
};
