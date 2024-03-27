/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/formcheckbox.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { FormCheckbox } from '../../../src/formCheckbox/FormCheckbox';

export default {
  title: 'DCXLibrary/Form/CheckBox/Design system',
  component: FormCheckbox,
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
    label: 'Lorem ipsum',
    value: 'lorem',
    id: 'lorem',
  },
};
