import { Breadcrumb, BreadcrumbItem } from '../../src/breadcrumb';
import { Link } from '../../src/link';

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
        <BreadcrumbItem>
          <Link value="content 1" className="govuk-breadcrumbs__link" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 2" className="govuk-breadcrumbs__link" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 3" className="govuk-breadcrumbs__link" to="#" />
        </BreadcrumbItem>
      </Breadcrumb>
    );
  },
};
