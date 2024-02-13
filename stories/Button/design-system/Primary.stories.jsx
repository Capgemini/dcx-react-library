import { Button } from '../../../src/button';
import { SVG_EXAMPLE } from '../helpers/svg.example';

/**
 * Here we display the component in its natural `button` form variant primary, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Primary',
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

export const CustomContent = {
  name: 'Custom Content',
  args: {
    variant: 'primary',
    children: [<strong>My Button</strong>],
  },
};
