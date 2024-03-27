import ButtonLive from '../liveEdit/ButtonLive';
import { Button } from '../../src/button/Button';

export default {
  title: 'DCXLibrary/Form/Button/Live',
  component: Button,

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
  render: () => <ButtonLive />,
};
