import { DescriptionList } from '../../src/descriptionList/DescriptionList';
import DescriptionListLive from '../liveEdit/DescriptionListLive';

export default {
  title: 'DCXLibrary/Typography/DescriptionList/Live',
  component: DescriptionList,

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
  render: () => <DescriptionListLive />,
};
