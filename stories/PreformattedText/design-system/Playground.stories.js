/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/preformattedText.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { PreformattedText } from '../../../src/preformattedText/PreformattedText';

export default {
  title: 'DCXLibrary/Typography/PreformattedText/Design system',
  component: PreformattedText,
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
    value: `Text in a pre element is displayed in a fixed-width font, and it preserves both   spaces and 
line breaks.`,
  },
};
