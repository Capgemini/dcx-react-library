import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Link,
} from '@capgeminiuk/dcx-react-library';
import './breadcrumbStyle.scss';

export const BreadcrumbDemo = () => {
  return (
    <>
      <h1>Demo of Breadcrumb</h1>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link value="content 1" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 2" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 3" to="#" />
        </BreadcrumbItem>
      </Breadcrumb>

      <h2>Demo of Breadcrumb with selected and selectedClassName</h2>
      <Breadcrumb
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemsClassName="govuk-breadcrumbs__list-item"
      >
        <BreadcrumbItem selected selectedClassName="selClass">
          <Link value="content 1" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem selectedClassName="selClass">
          <Link value="content 2" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 3" to="#" />
        </BreadcrumbItem>
      </Breadcrumb>

      <h2>Demo of Breadcrumb with selected and itemSelectedClassName</h2>
      <Breadcrumb
        itemSelectedClassName="selClass"
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemsClassName="govuk-breadcrumbs__list-item"
      >
        <BreadcrumbItem>
          <Link value="content 1" to="#" className="breadcrumb_link" />
        </BreadcrumbItem>
        <BreadcrumbItem selected>
          <Link value="content 2" to="#" className="breadcrumb_link" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 3" to="#" className="breadcrumb_link" />
        </BreadcrumbItem>
      </Breadcrumb>

      <h2>Demo of Breadcrumb with Separator</h2>
      <Breadcrumb
        separatorItem={<span> / </span>}
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        itemSelectedClassName="selClass"
        itemsClassName="breadcrumbItems"
      >
        <BreadcrumbItem>
          <Link value="content 1" to="#" className="breadcrumb_link" />
        </BreadcrumbItem>
        <BreadcrumbItem selected>
          <Link value="content 2" to="#" className="breadcrumb_link" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 3" to="#" className="breadcrumb_link" />
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
