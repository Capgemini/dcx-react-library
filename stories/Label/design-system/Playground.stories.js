import { Label } from '../../../src/label/Label';

export default {
  title: 'DCXLibrary/Typography/Label/Design system',
  component: Label,
  decorators: [
    (getStory) => {
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
    value: 'Default label',
  },
};
