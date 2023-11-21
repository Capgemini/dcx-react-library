import { DescriptionList, Detail, Term } from '../../src/descriptionList';

/**
 * In this section we're using the DescriptionList component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */

export default {
  title: 'DCXLibrary/Typography/DescriptionList/Class based',
  component: DescriptionList,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'],
};

export const Basic = {
  name: 'Basic',
  render: function () {
    return (
      <DescriptionList
        className="govuk-summary-list"
        termClassName="govuk-summary-list__key"
        detailClassName="govuk-summary-list__value"
      >
        <div className="govuk-summary-list__row">
          <Term>Coffee</Term>
          <Detail>- black hot drink</Detail>
        </div>
        <div className="govuk-summary-list__row">
          <Term>Coffee</Term>
          <Detail>- black hot drink</Detail>
        </div>
      </DescriptionList>
    );
  },
};

export const MultipleTermsDetails = {
  name: 'Multiple Terms and Details',
  render: function () {
    return (
      <DescriptionList
        className="govuk-description-list"
        termClassName="govuk-description-list__key"
        detailClassName="govuk-description-list__value"
      >
        <Term>Coffee</Term>
        <Detail>- black hot drink</Detail>
        <Term>Milk</Term>
        <Detail>- white cold drink</Detail>
      </DescriptionList>
    );
  },
};
