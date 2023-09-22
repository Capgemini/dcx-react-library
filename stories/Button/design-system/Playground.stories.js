/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/button.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Button } from '../../../src/button';

export default {
  title: 'DCXLibrary/Form/Button/Design system',
  component: Button,
  decorators: [
    getStory => (
      <TokensDecorator style={style}>
        {getStory()}
      </TokensDecorator>
    ),
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    label: 'My Button',
    variant: ['primary', 'secondary', 'tertiary'],
  },
};
