import { RadioGroup } from '../../src/radioGroup/RadioGroup';

export default {
  title: 'DCXLibrary/Form/RadioGroup/Without style',
  component: RadioGroup,
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
    legend:{
      text: 'Heading text customisable by a given priority of type number between 1 to 6 (inclusive)',
      heading: {
        priority: 2,
      },
    },
    items:[
      {
        label: 'item-label',
        value: 'yes',
        id: 'first',
      },
      {
        label: 'item-label',
        value: 'no',
        id: 'second',
      },
    ],
  },
  argTypes: { onClick: { action: 'onClick' } },
};