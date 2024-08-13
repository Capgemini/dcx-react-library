/* eslint-disable import/no-webpack-loader-syntax */
import style from '!raw-loader!../../themes/material.theme.css';
import React from 'react';
import { LiveEditor, LiveProvider } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { Skeleton } from '../../../src/skeleton/Skeleton';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Layout/Skeleton/Design system/Material',
  component: Skeleton,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      require('../../themes/material.theme.css');
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
    bgColor: '#e0e0e0',
  },
};

export const Circular = {
  name: 'Circular wave animation',
  args: {
    variant: 'circular',
    width: '100px',
    height: '100px',
    animation: 'wave',
    bgColor: '#e0e0e0',
  },
};

export const Rounded = {
  name: 'Rounded pulsate animation',
  args: {
    variant: 'rounded',
    width: '250px',
    height: '40px',
    animation: 'pulsate',
    bgColor: '#e0e0e0',
  },
};

export const Text = {
  name: 'text pulsate animation',
  args: {
    variant: 'text',
    fontSize: '16px',
    animation: 'pulsate',
    bgColor: '#e0e0e0',
  },
};
