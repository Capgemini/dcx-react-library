import { DescriptionList, Term, Detail } from '../../src/descriptionList';

export default {
  title: 'DCXLibrary/Typography/DescriptionList/Without style',
  component: DescriptionList,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function () {
    return (
      <DescriptionList>
        <Term>Coffee</Term>
        <Detail>- black hot drink</Detail>
        <Term>Milk</Term>
        <Detail>- white cold drink</Detail>
      </DescriptionList>
    );
  },
};
