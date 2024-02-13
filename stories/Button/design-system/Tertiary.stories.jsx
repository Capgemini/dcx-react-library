import { Button } from '../../../src/button';
import { SVG_EXAMPLE } from '../helpers/svg.example';

/**
 * Here we display the component in its natural `button` form variant tertiary, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Tertiary',
  component: Button,
  decorators: [
    (getStory) => {
      import('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
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
  name: 'Custom Content',
  args: {
    variant: 'tertiary',
    children: [<strong>My Button</strong>],
  },
};
