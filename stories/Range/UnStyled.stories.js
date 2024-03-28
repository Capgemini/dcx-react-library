import { Range } from '../../src/range/Range';

export default {
  title: 'DCXLibrary/Form/Range/Without style',
  component: Range,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

/**
 * For a list of all the possible usage please look the Class based folder
 */
export const Unstyled = {
  args: {
    min: 0,
    max: 100,
    ariaLabel: 'Range',
  },
};
