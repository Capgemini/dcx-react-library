import { Breadcrumb, BreadcrumbItem } from '../../src/breadcrumb';

/**
 * In this section we're using the List component providing the **GovUk style** passing the relative className.
 * Feel free to use your own css to style the formInput as you prefer.
 */
export default {
  title: 'DCXLibrary/Breadcrumb/Class based',
  component: Breadcrumb,
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
      <Breadcrumb
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemsClassName="govuk-breadcrumbs__list-item"
      >
        <BreadcrumbItem className="govuk-breadcrumbs__link">
          content 1
        </BreadcrumbItem>
        <BreadcrumbItem className="govuk-breadcrumbs__link">
          content 2
        </BreadcrumbItem>
        <BreadcrumbItem className="govuk-breadcrumbs__link">
          content 3
        </BreadcrumbItem>
      </Breadcrumb>
    );
  },
};
