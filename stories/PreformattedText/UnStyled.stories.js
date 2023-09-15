import { PreformattedText } from '../../src/preformattedText/PreformattedText';

export default {
  title: 'DCXLibrary/Typography/PreformattedText/Without style',
  component: PreformattedText,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    value:
      'Text in a pre element is displayed in a fixed-width font, and it preserves both      spaces and line breaks.',
  },
};
