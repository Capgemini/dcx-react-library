import { Skeleton } from '../../src/skeleton/Skeleton';
import SkeletonLive from '../liveEdit/SkeletonLive';

export default {
  title: 'DCXLibrary/Layout/Skeleton/Live',
  component: Skeleton,

  parameters: {
    options: {
      showPanel: false,
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
};

export const Live = {
  render: () => <SkeletonLive />,
};
