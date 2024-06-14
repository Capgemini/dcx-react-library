import { LiveProvider, LiveEditor } from 'react-live';
import style from '!raw-loader!../../themes/material.theme.css';

import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { Range } from '../../../src/range/Range';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Form/Range/Design system/Material',
  component: Range,
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
        { name: 'dark', value: '#282c34' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  render: () => (
    <LiveProvider
      code={StorybookUtils.getThemeCode('dcx-range', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Default = {
  name: 'Default',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 50,
  },
};
 
export const Disabled = {
  name: 'Disabled',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 75,
    disabled: true
  },
};
 
export const Tooltip = {
  name: 'Tooltip',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 61,
    showTooltip: true
  },
};
 
export const SuffixAndPrefix = {
  name: 'SuffixAndPrefix',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    prefix: (
      <div>
        <h6>Low</h6>
      </div>
    ),
    suffix: (
      <div>
        <h6>High</h6>
      </div>
    )
  },
};