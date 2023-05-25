import { Paragraph } from '../../src/paragraph/Paragraph';

export default {
  title: 'DCXLibrary/Typography/Paragraph/Without style',
  component: Paragraph,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    value: 'This is the content of the paragraph.'
  },
};
