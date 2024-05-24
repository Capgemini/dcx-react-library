/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/heading.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Heading } from '../../../src/heading/Heading';

export default {
  title: 'DCXLibrary/Typography/Heading/Design system',
  component: Heading,
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
    label: 'This is the content of the heading',
    level: 'h1',
  },
};
