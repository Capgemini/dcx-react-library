import { Blockquote } from '../../../src/blockquote/Blockquote';
/**
 * Here we display the component in its natural default state, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/Blockquote/Design system/Default',
  component: Blockquote,
  decorators: [
    (getStory) => {
      '../../themes/design-system/index.css';
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
    className: 'dcx-blockquote',
    text: 'This is blockquote text',
    footer: 'This is footer text',
  },
};
