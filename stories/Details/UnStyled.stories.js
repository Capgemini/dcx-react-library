import { Details } from '../../src/details/Details';

export default {
  title: 'DCXLibrary/Details/Without style',
  component: Details,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function (args) {
    return (
      <Details {...args}>
        some detail information
      </Details>
    )
  },
  args: {
    summary:"some headline summary"
  },
};