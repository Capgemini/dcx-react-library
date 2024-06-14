import style from '!raw-loader!../../themes/accessible.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { Range } from '../../../src/range/Range';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';
import { useArgs } from '@storybook/preview-api';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Form/Range/Design system/Accessible',
  component: Range,
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

export const SuffixAndPrefix = {
  name: 'SuffixAndPrefix',
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
    prefix: (
      <div>
        <h4>Low</h4>
      </div>
    ),
    suffix: (
      <div>
        <h4>High</h4>
      </div>
    )
  },
};
