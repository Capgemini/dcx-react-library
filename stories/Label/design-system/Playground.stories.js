/* eslint-disable import/no-webpack-loader-syntax */
import { Label } from '../../../src/label/Label';
import style from '!raw-loader!../../../dist/design-system/label.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';

export default {
  title: 'DCXLibrary/Typography/Label/Design system',
  component: Label,
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
    value: 'Default label',
  },
};
