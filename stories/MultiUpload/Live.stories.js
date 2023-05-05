import { MultiUpload } from '../../src/multiUpload/MultiUpload';
import MultiUploadLive from '../liveEdit/MultiUploadLive';

export default {
  title: 'DCXLibrary/Form/MultiUpload/Live',
  component: MultiUpload,

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
  render: () => <MultiUploadLive />
};
