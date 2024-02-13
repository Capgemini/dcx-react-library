import { CharacterCount } from '../../src/characterCount';
import CharacterCountLive from '../liveEdit/CharacterCountLive';

export default {
  title: 'DCXLibrary/Form/CharacterCount/Live',
  component: CharacterCount,

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
  render: () => <CharacterCountLive />
};
