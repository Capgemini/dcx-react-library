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
    value:
      'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
  },
};
