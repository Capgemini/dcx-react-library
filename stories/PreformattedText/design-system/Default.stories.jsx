import { PreformattedText } from '../../../src/preformattedText/PreformattedText';
/**
 * Here we display the component in its natural preformattedText, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/PreformattedText/Design system/Default',
  component: PreformattedText,
  decorators: [
    getStory => {
      import('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const Default = {
  name: 'Default',
  args: {
    value: `Text in a pre element is displayed in a fixed-width font, and it preserves both   spaces and 
line breaks.`,
  },
};
