import { Breadcrumb, BreadcrumbItem } from '../../src/breadcrumb';
import { Link } from '../../src/link';
import './style.css';

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

export const selectedBreadcrumb = {
  name: 'With itemSelectedClassName on Breadcrumb and content 1 selected',
  render: function () {
    return (
      <Breadcrumb
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemsClassName="govuk-breadcrumbs__list-item"
        itemSelectedClassName="selClass"
      >
        <BreadcrumbItem selected={true}>
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

export const selectedBreadcrumbItem = {
  name: 'With selectedClassName on each Breadcrumb item and content 2 selected ',
  render: function () {
    return (
      <Breadcrumb
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemsClassName="govuk-breadcrumbs__list-item"
      >
        <BreadcrumbItem selectedClassName="selClass">
          <Link value="content 1" className="govuk-breadcrumbs__link" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem selected={true} selectedClassName="selClass">
          <Link value="content 2" className="govuk-breadcrumbs__link" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem selectedClassName="selClass">
          <Link value="content 3" className="govuk-breadcrumbs__link" to="#" />
        </BreadcrumbItem>
      </Breadcrumb>
    );
  },
};

export const BreadcrumbItemSeperator = {
  name: 'Breadcrumb Items with seperator',
  render: function () {
    return (
      <Breadcrumb
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemsClassName="breadcrumbItems"
        separatorItem={<span className="separator"> / </span>}
      >
        <BreadcrumbItem selectedClassName="selClass">
          <Link value="content 1" className="link" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem selected={true} selectedClassName="selClass">
          <Link value="content 2" to="#" className="link" />
        </BreadcrumbItem>
        <BreadcrumbItem selectedClassName="selClass">
          <Link value="content 3" to="#" className="link" />
        </BreadcrumbItem>
      </Breadcrumb>
    );
  },
};
