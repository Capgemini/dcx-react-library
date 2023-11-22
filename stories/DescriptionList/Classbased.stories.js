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
          <Term>Name</Term>
          <Detail>Sarah Philips</Detail>
        </div>
        <div className="govuk-summary-list__row">
          <Term>Date of birth</Term>
          <Detail>5 January 1978</Detail>
        </div>
        <div className="govuk-summary-list__row">
          <Term>Address</Term>
          <Detail>
            72 Guild Street <br /> London <br />
            SE23 6FH8
          </Detail>
        </div>
        <div className="govuk-summary-list__row">
          <Term>Contact details</Term>
          <Detail>
            07700 900457 <br /> sarah.phillips@example.com
          </Detail>
        </div>
      </DescriptionList>
    );
  },
};
