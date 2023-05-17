import { InsertText } from '../../src/insertText/InsertText';

export default {
  title: 'DCXLibrary/Typography/InsertText/Class based',
  component: InsertText,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    value: 'insert text',
    className: 'govuk-inset-text',
  },
};
