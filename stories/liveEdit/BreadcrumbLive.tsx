import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Breadcrumb, BreadcrumbItem } from '../../src/breadcrumb';
import { Link } from '../../src/link';

const BreadcrumbDemo = `
function BreadcrumbDemo() {
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
    )
}
`.trim();

const BreadcrumbLive = () => {
  const scope = { Breadcrumb, BreadcrumbItem, Link };
  return (
    <LiveProvider code={BreadcrumbDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default BreadcrumbLive;
