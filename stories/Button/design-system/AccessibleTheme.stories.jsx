/* eslint-disable import/no-webpack-loader-syntax */
import { Button } from '../../../src/button';
import style from '../../themes/accessible.theme.css?raw';
import { LiveProvider, LiveEditor } from 'react-live';
import { SVG_EXAMPLE } from '../helpers/svg.example';
import { StorybookUtils } from '../../../core/storybook/StorybookUtils';

/**
 * This a theme aimed at easing the vizualization of the different elements of the component in order to improve the experience for people that have visual impairments.
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Accessible',
  component: Button,
  decorators: [
    (getStory) => {
      import('../../../dist/design-system/index.css');
      import('../../themes/accessible.theme.css');
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

export const PrimaryText = {
  name: 'Primary Text',
  args: {
    label: 'My Button',
    variant: 'primary',
  },
};

export const PrimaryIcon = {
  name: 'Primary Icon',
  args: {
    customPrefixImg: SVG_EXAMPLE,
    variant: 'primary',
  },
};

export const PrimaryTextIconLeft = {
  name: 'Primary Text Icon Left',
  args: {
    label: 'my button',
    variant: 'primary',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const PrimaryTextIconRight = {
  name: 'Primary Text Icon Right',
  args: {
    label: 'My Button',
    variant: 'primary',
    customPostfixImg: SVG_EXAMPLE,
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

export const SecondaryText = {
  name: 'Secondary Text',
  args: {
    label: 'My Button',
    variant: 'secondary',
  },
};

export const SecondaryIcon = {
  name: 'Secondary Icon',
  args: {
    customPrefixImg: SVG_EXAMPLE,
    variant: 'secondary',
  },
};

export const SecondaryTextIconLeft = {
  name: 'Secondary Text Icon Left',
  args: {
    label: 'my button',
    variant: 'secondary',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const SecondaryTextIconRight = {
  name: 'Secondary Text Icon Right',
  args: {
    label: 'My Button',
    variant: 'secondary',
    customPostfixImg: SVG_EXAMPLE,
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

export const TertiaryText = {
  name: 'Tertiary Text',
  args: {
    label: 'My Button',
    variant: 'tertiary',
  },
};

export const TertiaryIcon = {
  name: 'Tertiary Icon',
  args: {
    customPrefixImg: SVG_EXAMPLE,
    variant: 'tertiary',
  },
};

export const TertiaryTextIconLeft = {
  name: 'Tertiary Text Icon Left',
  args: {
    label: 'my button',
    variant: 'tertiary',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const TertiaryTextIconRight = {
  name: 'Tertiary Text Icon Right',
  args: {
    label: 'My Button',
    variant: 'tertiary',
    customPostfixImg: SVG_EXAMPLE,
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
  name: 'Custom content',
  args: {
    children: [<strong>Login</strong>],
    variant: 'primary',
  },
};
