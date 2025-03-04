import AvatarLive from '../liveEdit/AvatarLive';
import { Avatar } from '../../src/avatar/Avatar';

export default {
  title: 'DCXLibrary/Form/Avatar/Live',
  component: Avatar,

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
  render: () => <AvatarLive />,
};
