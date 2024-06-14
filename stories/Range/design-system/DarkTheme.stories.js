/* eslint-disable import/no-webpack-loader-syntax */
import { Range } from '../../../src/range/Range';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
 
/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
 
export default {
  title: 'DCXLibrary/Form/Range/Design system/Dark',
  component: Range,
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
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 50,
  },
};
 
export const Disabled = {
  name: 'Disabled',
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
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 75,
    disabled: true
  },
};
 
export const Tooltip = {
  name: 'Tooltip',
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
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    value: 61,
    showTooltip: true
  },
};
 
export const SuffixAndPrefix = {
  name: 'SuffixAndPrefix',
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
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    prefix: (
      <div>
        <h6 style={{ color: '#fff' }}>Low</h6>
      </div>
    ),
    suffix: (
      <div>
        <h6 style={{ color: '#fff' }}>High</h6>
      </div>
    )
  },
};
 
// export const Custom = {
//   name: 'Custom',
//   parameters: {
//     backgrounds: {
//       default: 'dark',
//       values: [
//         { name: 'dark', value: '#333131' },
//         { name: 'light', value: '#fff' },
//       ],
//     },
//   },
//   args: {
//     min: 0,
//     max: 100,
//     ariaLabel: 'Range',
//     inputClass: 'customRange'
//   },
// };