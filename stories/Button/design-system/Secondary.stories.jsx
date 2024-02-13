import { Button } from '../../../src/button';
import { SVG_EXAMPLE } from '../helpers/svg.example';

/**
 * Here we display the component in its natural `button` form variant secondary, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Secondary',
  component: Button,
  decorators: [
    (getStory) => {
      import('../../themes/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
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

export const CustomContent = {
  name: 'Custom Content',
  args: {
    variant: 'secondary',
    children: [<strong>My Button</strong>],
  },
};
