import { Stepper } from '../../src/stepper';
import StepperLive from '../liveEdit/StepperLive';

export default {
  title: 'DCXLibrary/Layout/Stepper/Live',
  component: Stepper,

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
  render: () => <StepperLive />,
};