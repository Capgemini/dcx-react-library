import { InsertText } from '../../../src/insertText/InsertText';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/InsertText/Design system/Default',
  component: InsertText,
  decorators: [
    (getStory) => {
      '../../../dist/design-system/index.css';
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
    value:
      'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
    className: 'dcx-insert-text',
  },
};
