import { LoadingSpinner } from '../../src/spinner/LoadingSpinner'
import LoadingSpinnerLive from '../liveEdit/LoadingSpinnerLive';

export default {
  title: 'DCXLibrary/Form/LoadingSpinner/Live',
  component: LoadingSpinner,

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
  render: () => <LoadingSpinnerLive />,
};
