import { Progress } from '../../src/progress/Progress';

export default {
  title: 'DCXLibrary/Form/Progress/Without style',
  component: Progress,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    label: 'Progress',
    max:100,
    value:80
  },
};
