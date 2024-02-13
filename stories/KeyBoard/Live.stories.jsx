import { KeyboardInput } from '../../src/keyBoard';
import KeyboardInputLive from '../liveEdit/KeyboardInputLive';

export default {
  title: 'DCXLibrary/Typography/KeyboardInput/Live',
  component: KeyboardInput,

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
  render: () => <KeyboardInputLive />,
};
