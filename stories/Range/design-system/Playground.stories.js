/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/formcheckbox.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Range } from '../../../src/range/Range';
 
export default {
  title: 'DCXLibrary/Form/Range/Design system',
  component: Range,
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
    ariaLabel: "Range",
    max: '100',
    min: '0'
  },
};
 