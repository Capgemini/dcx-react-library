/* eslint-disable import/no-webpack-loader-syntax */
import style from '../../../dist/design-system/abbreviate.css?raw';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Abbreviate } from '../../../src/abbreviate/Abbreviate';
import { Paragraph } from '../../../src/paragraph/Paragraph';

export default {
  title: 'DCXLibrary/Typography/Abbreviate/Design system',
  component: Abbreviate,
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
    title: 'As soon as possible',
    value: 'ASAP',
  },
  render: ({ title, value }) => (
    <Paragraph>
      Sorry, i call you <Abbreviate {...{ title, value }} />
    </Paragraph>
  ),
};
