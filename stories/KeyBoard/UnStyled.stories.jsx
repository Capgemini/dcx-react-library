import { KeyboardInput } from '../../src/keyBoard/KeyboardInput';

export default {
  title: 'DCXLibrary/Typography/KeyboardInput/Without style',
  component: KeyboardInput,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    children: 'ctrl+p',
  },
};
