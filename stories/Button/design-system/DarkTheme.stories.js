/* eslint-disable import/no-webpack-loader-syntax */
import { Button } from '../../../src/button';
import style from '!raw-loader!../../themes/dark.theme.css';
import { LiveProvider, LiveEditor } from 'react-live';
import { SVG_EXAMPLE } from '../helpers/svg.example';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases how to customize the component so it can be used on dark backgrounds.
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Dark',
  component: Button,
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
      code={StorybookUtils.getThemeCode('dcx-button', style)}
      disabled={true}
      language="css"
    >
      <LiveEditor className="liveEditor" aria-label="editor" />
    </LiveProvider>
  ),
};

export const Primary = {
  name: 'Primary',
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
    label: 'My Button',
    variant: 'primary',
  },
};

export const PrimaryIcon = {
  name: 'Primary Icon',
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
    variant: 'primary',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const PrimaryTextIconLeft = {
  name: 'Primary text Icon Left',
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
    label: 'My Button',
    variant: 'primary',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const PrimaryTextIconRight = {
  name: 'Primary text Icon Right',
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
    label: 'My Button',
    variant: 'primary',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const PrimaryDisabled = {
  name: 'Primary Disabled',
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
    label: 'My Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary = {
  name: 'Secondary',
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
    label: 'My Button',
    variant: 'secondary',
  },
};

export const SecondaryIcon = {
  name: 'Secondary Icon',
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
    variant: 'secondary',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const SecondaryTextIconLeft = {
  name: 'Secondary text Icon Left',
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
    label: 'My Button',
    variant: 'secondary',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const SecondaryTextIconRight = {
  name: 'Secondary text Icon Right',
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
    label: 'My Button',
    variant: 'secondary',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const SecondaryDisabled = {
  name: 'Secondary Disabled',
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
    label: 'My Button',
    variant: 'secondary',
    disabled: true,
  },
};

export const Tertiary = {
  name: 'Tertiary',
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
    label: 'My Button',
    variant: 'tertiary',
  },
};

export const TertiaryIcon = {
  name: 'Tertiary Icon',
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
    variant: 'tertiary',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const TertiaryTextIconLeft = {
  name: 'Tertiary text Icon Left',
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
    label: 'My Button',
    variant: 'tertiary',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const TertiaryTextIconRight = {
  name: 'Tertiary text Icon Right',
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
    label: 'My Button',
    variant: 'tertiary',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const TertiaryDisabled = {
  name: 'Tertiary Disabled',
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
    label: 'My Button',
    variant: 'tertiary',
    disabled: true,
  },
};

export const CustomContent = {
  name: 'Custom content',
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
    children: [<strong>My Button</strong>],
    variant: 'primary',
  },
};
