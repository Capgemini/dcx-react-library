import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Breadcrumb, BreadcrumbItem } from '../../src/breadcrumb';

const BreadcrumbDemo = `
function BreadcrumbDemo() {
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
    )
}
`.trim();

const BreadcrumbLive = () => {
  const scope = { Breadcrumb, BreadcrumbItem };
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
