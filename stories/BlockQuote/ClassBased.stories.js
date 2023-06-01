import { Blockquote } from '../../src/blockquote/Blockquote';
import './style.css';
/**
 * In this section we're using the Blockquote component providing the relative `className, text and footer` . Feel free to use your own css and style the Blockquote as you prefer.
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
    className: 'blockquote',
    text: 'This is the content of the blockquote.',
    footer: 'This is the footer of the blockquote.'
  },
};

