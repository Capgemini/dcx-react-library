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
    value: 'This is the content of the blockquote.'
  },
};
