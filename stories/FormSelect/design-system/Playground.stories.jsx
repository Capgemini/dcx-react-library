/* eslint-disable import/no-webpack-loader-syntax */
import style from '../../../dist/design-system/formselect.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { FormSelect } from '../../../src/formSelect/FormSelect';

export default {
  title: 'DCXLibrary/Form/Select/Design system',
  component: FormSelect,
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


export const Playground = {
  name: 'Playground',
  args: {
    label: 'My label',
    options: ['Option 1', 'Option 2'],
    nullOption: 'Select an option...'
  },
};