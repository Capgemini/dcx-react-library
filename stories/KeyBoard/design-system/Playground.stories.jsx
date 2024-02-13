import style from '../../../dist/design-system/keyboard-input.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { KeyboardInput } from '../../../src/keyBoard/KeyboardInput';

export default {
  title: 'DCXLibrary/Typography/KeyboardInput/Design system',
  component: KeyboardInput,
  decorators: [
    (getStory) => (
      <TokensDecorator style={style}>
        {getStory()}
      </TokensDecorator>
    )
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  }
};

export const Default = {  
  name: 'Playground',
  args: {
    children: 'ctrl+p',
  },
};
