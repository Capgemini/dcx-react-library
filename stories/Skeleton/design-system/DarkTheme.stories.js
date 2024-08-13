import { LiveEditor, LiveProvider } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
// eslint-disable-next-line import/no-webpack-loader-syntax
import style from '!raw-loader!../../themes/dark.theme.css';
import React from 'react';
import { Skeleton } from '../../../src/skeleton/Skeleton';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Layout/Skeleton/Design system/Dark',
  component: Skeleton,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/dark.theme.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const ShowCase = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider
      code={StorybookUtils.getThemeCode('dcx-skeleton', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Basic = {
  name: 'Basic',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    variant: 'rectangular',
    width: '250px',
    height: '40px',
    bgColor: '#454545',
  },
};

export const Circular = {
  name: 'Circular wave animation',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    variant: 'circular',
    width: '100px',
    height: '100px',
    animation: 'wave',
    bgColor: '#454545',
  },
};

export const Rounded = {
  name: 'Rounded pulsate animation',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    variant: 'rounded',
    width: '250px',
    height: '40px',
    bgColor: '#454545',
    animation: 'pulsate',
  },
};

export const Text = {
  name: 'text pulsate animation',
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#333131' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  args: {
    variant: 'text',
    fontSize: '16px',
    animation: 'pulsate',
    bgColor: '#454545',
  },
};
