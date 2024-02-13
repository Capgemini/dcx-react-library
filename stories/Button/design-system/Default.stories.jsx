import { Button } from '../../../src/button';
import { SVG_EXAMPLE } from '../helpers/svg.example';

/**
 * Here we display the component in its natural `button` form default, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Form/Button/Design system/Default',
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

export const DefaultText = {
  name: 'Default Text',
  args: {
    label: 'My Button',
  },
};

export const DefaultIcon = {
  name: 'Default Icon',
  args: {
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const DefaultTextIconLeft = {
  name: 'Default Text Icon Left',
  args: {
    label: 'my button',
    customPrefixImg: SVG_EXAMPLE,
  },
};

export const DefaultTextIconRight = {
  name: 'Default Text Icon Right',
  args: {
    label: 'My Button',
    customPostfixImg: SVG_EXAMPLE,
  },
};

export const DefaultDisabled = {
  name: 'Default Disabled',
  args: {
    label: 'My Button',
    disabled: true,
  },
};

export const CustomContent = {
  name: 'Custom Content',
  args: {
    children: [<strong>My Button</strong>],
  },
};
