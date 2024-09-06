/* eslint-disable import/no-webpack-loader-syntax */
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Avatar } from '../../../src/avatar';

export default {
  title: 'DCXLibrary/Form/Avatar/Design system',
  component: Avatar,
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
  args: {},
};
