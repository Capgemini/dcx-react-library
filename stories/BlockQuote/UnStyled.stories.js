import { Blockquote } from '../../src/blockquote/Blockquote';

export default {
  title: 'DCXLibrary/Typography/Blockquote/Without style',
  component: Blockquote,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    text: 'This is the content of the blockquote.',
    footer: 'This is the footer of the blockquote.',
  },
};
