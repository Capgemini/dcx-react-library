import { KeyboardInput } from '../../src/keyBoard/KeyboardInput';
/**
 * In this section we're using the KeyboardInput component passing the relative className.  
 * Feel free to use your own css to style the KeyboardInput as you prefer.  
 */
export default {
  title: 'DCXLibrary/Typography/KeyboardInput/Class based',
  component: KeyboardInput,
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
    children: 'ctrl+p',
    className: 'kbd',
  },
};
