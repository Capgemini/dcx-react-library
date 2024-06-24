import { Skeleton } from '../../src/skeleton/Skeleton';
import './style.css';

/**
 * In this section we're using the Skeleton component passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Layout/Skeleton/Class based',
  component: Skeleton,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  args: {
    variant: 'rectangular',
    width: '250px',
    height: '40px',
    className: 'wave-animation',
  },
};

export const Circular = {
  name: 'Circular',
  args: {
    width: '100px',
    height: '100px',
    className: 'circular wave-animation',
  },
};

export const Rounded = {
  name: 'Rounded',
  args: {
    width: '250px',
    height: '40px',
    className: 'rounded wave-animation',
  },
};
