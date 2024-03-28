/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/paragraph.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Paragraph } from '../../../src/paragraph/Paragraph';

export default {
  title: 'DCXLibrary/Typography/Paragraph/Design system',
  component: Paragraph,
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
    value: '',
    children: 'This is the content of the paragraph.',
  },
};
