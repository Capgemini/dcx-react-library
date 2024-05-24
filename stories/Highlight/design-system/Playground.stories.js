/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/highlight.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Highlight } from '../../../src/highlight/Highlight';

export default {
  title: 'DCXLibrary/Typography/Highlight/Design system',
  component: Highlight,
  decorators: [
    (getStory) => <TokensDecorator style={style}>{getStory()}</TokensDecorator>,
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
};

export const Default = {
  name: 'Playground',
  args: {
    children: 'This is the content of the highlighted text.',
  },
};
