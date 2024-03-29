import { PreformattedText } from '../../src/preformattedText/PreformattedText';
import './PreformattedText.css';

/**
 * In this section we're using the PreformattedText component  passing the relative className.
 * Feel free to use your own css to style the PreformattedText as you prefer.
 */
export default {
  title: 'DCXLibrary/Typography/PreformattedText/Class based',
  component: PreformattedText,
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
    value:
      'Text in a pre element is displayed in a fixed-width font, and it preserves both      spaces and line breaks.',
    className: 'customPreformattedText',
  },
};
