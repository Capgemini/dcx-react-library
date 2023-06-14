import { InsertText } from '../../src/insertText/InsertText';

export default {
  title: 'DCXLibrary/Typography/InsertText/Without style',
  component: InsertText,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    value: 'insert text',
  },
};
