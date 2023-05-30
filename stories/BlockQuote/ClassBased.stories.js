import { Blockquote } from '../../src/blockquote/Blockquote';
/**
 * In this section we're using the blockquote component providing the **GovUk style** passing the relative `className.
 * Feel free to use your own css to style the blockquote as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/Blockquote/Class based',
  component: Blockquote,
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
    className: 'blockquote-reverse',
    text: 'This is the content of the blockquote.',
    footer: 'This is the footer of the blockquote.'
  },
};
