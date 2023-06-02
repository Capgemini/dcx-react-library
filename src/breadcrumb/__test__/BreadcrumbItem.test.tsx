import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { Breadcrumb } from '../Breadcrumb';

describe('BreadcrumbItem', () => {
  it('should display the text of the BreadcrumbItem', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem> content </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('should be able to render the user specific className for BreadcrumbItem', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem className="myClass"> content </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(container.querySelector('li.myClass')).toBeInTheDocument();
  });

  it('should be able to render respective number of childrens', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem className="myClass"> content 1 </BreadcrumbItem>
        <BreadcrumbItem className="myClass"> content 2 </BreadcrumbItem>
        <BreadcrumbItem className="myClass"> content 3 </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(container.querySelectorAll('li.myClass').length).toBe(3);
  });

  it('should allow to use the BreadcrumbItem component only in the Breadcrumb component', () => {
    expect(() => render(<BreadcrumbItem> content </BreadcrumbItem>)).toThrow(
      'BreadcrumbItem component must be used within Breadcrumb component'
    );
  });
});
