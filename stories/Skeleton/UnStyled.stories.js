import { Skeleton } from '../../src/skeleton/Skeleton';

export default {
  title: 'DCXLibrary/Layout/Skeleton/Without style',
  component: Skeleton,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function (args) {
    return <Skeleton {...args} />;
  },
  args: {
    variant: 'rectangular',
    width: '250px',
    height: '40px',
    animation: 'wave',
  },
};
