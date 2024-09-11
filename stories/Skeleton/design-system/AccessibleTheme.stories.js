import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import React from 'react';
import { Skeleton } from '../../../src/skeleton/Skeleton';

export default {
  title: 'DCXLibrary/Layout/Skeleton/Design system/Accessible',
  component: Skeleton,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/accessible.theme.css');
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
  args: {
    variant: 'rectangular',
    width: '250px',
    height: '40px',
  },
};

export const Circular = {
  name: 'Circular wave animation',
  args: {
    variant: 'circular',
    width: '100px',
    height: '100px',
    animation: 'wave',
  },
};

export const Rounded = {
  name: 'Rounded pulsate animation',
  args: {
    variant: 'rounded',
    width: '250px',
    height: '40px',
    animation: 'pulsate',
  },
};

export const Text = {
  name: 'text pulsate animation',
  args: {
    variant: 'text',
    fontSize: '16px',
    animation: 'pulsate',
  },
};
