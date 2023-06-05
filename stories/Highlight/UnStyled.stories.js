import { Highlight } from '../../src/highlight/Highlight';

export default {
  title: 'DCXLibrary/Typography/Highlight/Without style',
  component: Highlight,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    text: 'This is the content of the highlighted text.'
  },
};
