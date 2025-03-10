import { KeyboardInput } from '../../src/keyBoard/KeyboardInput';
import './keyBoardStyle.css';
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

export const KeyboardInputWithValue = {
  name: 'KeyboardInput rendering value prop',
  args: {
    value: 'ctrl+p',
    className: 'kbd',
  },
};

export const KeyboardInputWithChildren = {
  name: 'KeyboardInput rendering child component',
  render: function(args) {
    return (
      <KeyboardInput {...args}>
        <p>ctrl+p</p>
      </KeyboardInput>
    );
  },
  args: {
    className: 'kbd',
  },
};
