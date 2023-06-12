import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Link,
} from '@capgeminiuk/dcx-react-library';
import './breadcrumbStyle.scss';

export const BreadcrumbDemo = () => {
  //   const link = 'https://www.google.com/';

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

      <h1>Demo of Breadcrumb with selected and selectedClassName</h1>
      <Breadcrumb>
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

      <h1>Demo of Breadcrumb with selected and itemSelectedClassName</h1>
      <Breadcrumb itemSelectedClassName="selClass">
        <BreadcrumbItem>
          <Link value="content 1" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem selected>
          <Link value="content 2" to="#" />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link value="content 3" to="#" />
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};
