import { InsertText } from '../../../src/insertText/InsertText';

export default {
  title: 'DCXLibrary/Typography/InsertText/Design system',
  component: InsertText,
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
    value: 'insert text',
  },
};
