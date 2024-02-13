import { Paragraph } from '../../../src/paragraph/Paragraph';
/**
 * Here we display the component in its natural paragraph, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/Paragraph/Design system/Default',
  component: Paragraph,
  decorators: [
    getStory => {
      import('../../themes/design-system/index.css');
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
    children: 'This is the content of the paragraph.',
  },
};

export const Value = {
  name: 'Value',
  args: {
    value: 'This is the content of the paragraph.',
  },
};

export const CustomContent = {
  name: 'CustomContent',
  args: {
    children: [
      'This is the simple custom-content of the ',
      <strong>paragraph</strong>,
    ],
  },
};
