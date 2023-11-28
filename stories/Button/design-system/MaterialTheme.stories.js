/* eslint-disable import/no-webpack-loader-syntax */
import { Button } from '../../../src/button';
import { LiveProvider, LiveEditor } from 'react-live';
import style from '!raw-loader!../../themes/material.theme.css';
import { SVG_EXAMPLE } from '../helpers/svg.example';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme showcases an appearance similar to Material UI can be achieved.
 * If you copy paste this snippet inside your css file you'll get a material design style
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Material',
  component: Button,
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
  args: {
    label: 'My Button',
    variant: 'primary',
  },
};

export const PrimaryIcon = {
  name: 'Primary Icon',
  args: {
    customPostfixImg: SVG_EXAMPLE,
    variant: 'primary',
  },
};

export const PrimaryTextIconLeft = {
  name: 'Primary Icon left',
  args: {
    label: 'My Button',
    customPrefixImg: SVG_EXAMPLE,
    variant: 'primary',
  },
};

export const PrimaryTextIconRight = {
  name: 'Primary Icon Right',
  args: {
    label: 'My Button',
    customPostfixImg: SVG_EXAMPLE,
    variant: 'primary',
  },
};

export const PrimaryDisabled = {
  name: 'Primary Disabled',
  args: {
    label: 'My Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary = {
  name: 'Secondary',
  args: {
    label: 'My Button',
    variant: 'secondary',
  },
};

export const SecondaryIcon = {
  name: 'Secondary Icon',
  args: {
    customPostfixImg: SVG_EXAMPLE,
    variant: 'secondary',
  },
};

export const SecondaryTextIconLeft = {
  name: 'Secondary Icon Left',
  args: {
    label: 'My Button',
    customPrefixImg: SVG_EXAMPLE,
    variant: 'secondary',
  },
};

export const SecondaryTextIconRight = {
  name: 'Secondary Icon Right',
  args: {
    label: 'My Button',
    customPostfixImg: SVG_EXAMPLE,
    variant: 'secondary',
  },
};

export const SecondaryDisabled = {
  name: 'Secondary Disabled',
  args: {
    label: 'My Button',
    variant: 'secondary',
    disabled: true,
  },
};

export const Tertiary = {
  name: 'Tertiary',
  args: {
    label: 'My Button',
    variant: 'tertiary',
  },
};

export const TertiaryIcon = {
  name: 'Tertiary Icon',
  args: {
    customPostfixImg: SVG_EXAMPLE,
    variant: 'tertiary',
  },
};

export const TertiaryTextIconLeft = {
  name: 'Tertiary Icon Left',
  args: {
    label: 'My Button',
    customPrefixImg: SVG_EXAMPLE,
    variant: 'tertiary',
  },
};

export const TertiaryTextIconRight = {
  name: 'Tertiary Icon Right',
  args: {
    label: 'My Button',
    customPostfixImg: SVG_EXAMPLE,
    variant: 'tertiary',
  },
};

export const TertiaryDisabled = {
  name: 'Tertiary Disabled',
  args: {
    label: 'My Button',
    variant: 'tertiary',
    disabled: true,
  },
};

export const CustomContent = {
  name: 'Custom Content',
  args: {
    children: [<strong>My Button</strong>],
  },
};
