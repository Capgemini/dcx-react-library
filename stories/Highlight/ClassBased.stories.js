import { Highlight } from '../../src/highlight/Highlight';
/**
 * In this section we're using the Highlight component providing the relative `className and text`. Feel free to use your own css and style the Highlight as you prefer.
*/
export default {
  title: 'DCXLibrary/Typography/Highlight/Class based',
  component: Highlight,
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
    className: 'highlight',
    text: 'This is the content of the highlighted text.'
  },
};

