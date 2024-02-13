/* eslint-disable import/no-webpack-loader-syntax */
import style from '../../../dist/design-system/form-input.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { FormInput } from '../../../src/formInput';

export default {
  title: 'DCXLibrary/Form/Input/Design system',
  component: FormInput,
  decorators: [
    getStory => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Playground = {
  name: 'Playground',
  args: {
    label: 'My label',
    nullOption: 'Input an option...',
  },
};
