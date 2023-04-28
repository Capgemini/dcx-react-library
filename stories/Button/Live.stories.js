import { Button } from '../../src/button/Button';
import ButtonLive from '../liveEdit/ButtonLive';

export default {
  title: 'DCXLibrary/Form/Button/live',
  component: Button,

  parameters: {
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
  name: 'live',
};
