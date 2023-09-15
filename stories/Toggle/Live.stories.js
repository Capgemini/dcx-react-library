import { Toggle } from '../../src/toggle/Toggle';
import ToggleLive from '../liveEdit/ToggleLive';

export default {
  title: 'DCXLibrary/Form/Toggle/Live',
  component: Toggle,

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
  render: () => <ToggleLive />
}
