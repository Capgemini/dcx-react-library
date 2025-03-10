import { Highlight } from '../../src/highlight/Highlight';
import './style.css';

/**
 * In this section we're using the Highlight component providing the relative `className`. Feel free to use your own css and style the Highlight as you prefer.
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
  name: 'Highlight rendering value prop',
  args: {
    className: 'highlight',
    value: 'This is the content of the highlighted text.',
  },
};

export const HighlightWithChildren = {
  name: 'Highlight rendering child component',
  render: function(args) {
    return (
      <Highlight {...args}>
        This is the content of the highlighted text.
      </Highlight>
    );
  },
  args: {
    className: 'highlight',
  },
};
