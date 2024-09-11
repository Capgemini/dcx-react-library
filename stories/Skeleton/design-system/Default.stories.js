import { Skeleton } from '../../../src/skeleton/Skeleton';

/**
 * Here we display the component in its natural form, importing only the base Design System styles.
 */
export default {
  title: 'DCXLibrary/Layout/Skeleton/Design system/Default',
  component: Skeleton,
  decorators: [
    (getStory) => {
      require('../../../dist/design-system/index.css');
      return getStory();
    },
  ],
  parameters: {
    options: { showPanel: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    variant: 'rectangular',
    width: '250px',
    height: '40px',
  },
};

export const Circular = {
  name: 'Circular wave animation',
  args: {
    variant: 'circular',
    width: '100px',
    height: '100px',
    animation: 'wave',
  },
};

export const Rounded = {
  name: 'Rounded pulsate animation',
  args: {
    variant: 'rounded',
    width: '250px',
    height: '40px',
    animation: 'pulsate',
  },
};

export const Text = {
  name: 'text pulsate animation',
  args: {
    variant: 'text',
    fontSize: '16px',
    animation: 'pulsate',
  },
};
