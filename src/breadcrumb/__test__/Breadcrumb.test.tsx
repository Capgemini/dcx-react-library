import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { Breadcrumb } from '../Breadcrumb';

describe('Breadcrumb', () => {
  it('should display the text of the BreadcrumbItem', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>content</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('should be able to render the user specific className for Breadcrumb', () => {
    const { container } = render(
      <Breadcrumb className="myClass">
        <BreadcrumbItem>content</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(container.querySelector('ol.myClass')).toBeInTheDocument();
  });

  it('should be able to render the user specific className to all the available childrens', () => {
    const { container } = render(
      <Breadcrumb itemsClassName="myClass">
        <BreadcrumbItem> content 1 </BreadcrumbItem>
        <BreadcrumbItem> content 2 </BreadcrumbItem>
        <BreadcrumbItem> content 3 </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(container.querySelector('li.myClass')).toBeInTheDocument();
    expect(container.querySelectorAll('li.myClass').length).toBe(3);
  });

  it('should be able to render with Breadcrumb itemsClassName and BreadcrumbItem className', () => {
    const { container } = render(
      <Breadcrumb itemsClassName="myClassParent">
        <BreadcrumbItem className="myClassChild"> content 1 </BreadcrumbItem>
        <BreadcrumbItem> content 2 </BreadcrumbItem>
        <BreadcrumbItem> content 3 </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(
      container.querySelector('li.myClassParent.myClassChild')
    ).toBeInTheDocument();
    expect(container.querySelectorAll('li.myClassParent').length).toBe(3);
  });

  it('should be able to render with two Breadcrumb classNames and one BreadcrumbItem className', () => {
    const { container } = render(
      <Breadcrumb itemsClassName="myClassParentA" className="myClassParentB">
        <BreadcrumbItem className="myClassChild"> content 1 </BreadcrumbItem>
        <BreadcrumbItem> content 2 </BreadcrumbItem>
        <BreadcrumbItem> content 3 </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(container.querySelector('ol.myClassParentB')).toBeInTheDocument();
    expect(
      container.querySelector('li.myClassParentA.myClassChild')
    ).toBeInTheDocument();
    expect(container.querySelectorAll('li.myClassParentA').length).toBe(3);
  });
});
