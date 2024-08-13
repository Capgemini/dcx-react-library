/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../../dist/design-system/skeleton.css';
import TokensDecorator from '../../../core/storybook/TokensDecorator';
import { Skeleton } from '../../../src/skeleton/Skeleton';

export default {
  title: 'DCXLibrary/Layout/Skeleton/Design system',
  component: Skeleton,
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
    variant: 'circular',
    width: '100px',
    height: '100px',
    animation: 'wave',
  },
};
