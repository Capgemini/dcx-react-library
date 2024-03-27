import { Accordion } from '../../src/accordion';
import AccordionLive from '../liveEdit/AccordionLive';

export default {
  title: 'DCXLibrary/Layout/Accordion/Live',
  component: Accordion,

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
  render: () => <AccordionLive />,
};
