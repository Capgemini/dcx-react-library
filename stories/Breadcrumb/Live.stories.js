import { Breadcrumb } from '../../src/breadcrumb';
import BreadcrumbLive from '../liveEdit/BreadcrumbLive';

export default {
  title: 'DCXLibrary/Layout/Breadcrumb/Live',
  component: Breadcrumb,

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
  render: () => <BreadcrumbLive />,
};
