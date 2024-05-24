/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/form-input.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { FormInput } from '../../../src/formInput';

export default {
  title: 'DCXLibrary/Form/Input/Design system',
  component: FormInput,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
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
