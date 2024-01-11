/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/button-group.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { ButtonGroup, Button } from '../../../src';

export default {
  title: 'DCXLibrary/Form/ButtonGroup/Design system',
  component: ButtonGroup,
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
    buttonVariant: 'primary',
    layout: 'horizontal',
    disabled: false
  },
  render: (args) => {
    return <ButtonGroup {...args}>
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button label="Button 3" />
    </ButtonGroup>
  }
};
