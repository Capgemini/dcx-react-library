import { Details } from '../../src/details/Details';

/**
 * In this section the Details component is used with styling from GOV.UK. Feel free to use your own css and style the Details component as you prefer
 */
export default {
  title: 'DCXLibrary/Layout/Details/Class based',
  component: Details,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

export const Basic = {
  name: 'Basic',
  render: function (args) {
    return (
      <Details {...args}>
          We need to know your nationality so we can work out which elections
          you’re entitled to vote in. If you cannot provide your nationality,
          you’ll have to send copies of identity documents through the post.
      </Details>
    )
  },
  args: {
    summary:"Help with nationality",
    detailsClassName:"govuk-details",
    summaryClassName:"govuk-details__summary",
    summaryTextClassName:"govuk-details__summary-text",
    detailsTextClassName:"govuk-details__text"
  },
};

export const Open = {
  name: 'Open',
  render: function (args) {
    return (
      <Details {...args}>
          We need to know your nationality so we can work out which elections
          you’re entitled to vote in. If you cannot provide your nationality,
          you’ll have to send copies of identity documents through the post.
      </Details>
    )
  },
  args: {
    summary:"Help with nationality",
    detailsClassName:"govuk-details",
    summaryClassName:"govuk-details__summary",
    summaryTextClassName:"govuk-details__summary-text",
    detailsTextClassName:"govuk-details__text",
    open: true
  },
}