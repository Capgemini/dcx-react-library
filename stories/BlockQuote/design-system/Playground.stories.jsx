/* eslint-disable import/no-webpack-loader-syntax */
import style from '../../../dist/design-system/blockquote.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Blockquote } from '../../../src/blockquote/Blockquote';

export default {
  title: 'DCXLibrary/Typography/Blockquote/Design system',
  component: Blockquote,
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
    text: 'This is blockquote text',
    footer: 'This is footer text',
  },
};
