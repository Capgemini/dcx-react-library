import { KeyboardInput } from '../../../src/keyBoard/KeyboardInput';
/**
 * Here we display the keyboard input, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Typography/KeyboardInput/Design system/Default',
  component: KeyboardInput,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
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
    children: 'ctrl+p',
  },
};
