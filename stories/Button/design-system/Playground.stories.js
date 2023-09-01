import { Button } from '../../../src/button';

export default {
  title: 'DCXLibrary/Form/Button/Design system',
  component: Button,
  decorators: [
    getStory => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    label: 'My Button',
    variant: ['primary', 'secondary', 'tertiary'],
  },
};
