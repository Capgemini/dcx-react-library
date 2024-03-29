import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { Breadcrumb } from '../Breadcrumb';

describe('BreadcrumbItem', () => {
  it('should display the text of the BreadcrumbItem', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem> content 1 </BreadcrumbItem>
        <BreadcrumbItem> content 2 </BreadcrumbItem>
      </Breadcrumb>
    );
    expect(screen.getByText('content 1')).toBeInTheDocument();
  });

  it('should be able to render the user specific className for BreadcrumbItem', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem className="myClass"> content </BreadcrumbItem>
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

  it('show selected classname on only selected breadcrumb item', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem className="myClass" selectedClassName="mySelectedClass">
          content 1
        </BreadcrumbItem>
        <BreadcrumbItem
          className="myClass"
          selectedClassName="mySelectedClass"
          selected
        >
          content 2
        </BreadcrumbItem>
        <BreadcrumbItem className="myClass" selectedClassName="mySelectedClass">
          content 3
        </BreadcrumbItem>
      </Breadcrumb>
    );

    expect(container.querySelectorAll('li.mySelectedClass').length).toBe(1);

    const breadcrumbItems = container.querySelectorAll('.myClass');
    expect(breadcrumbItems[0]).not.toHaveClass('mySelectedClass');
    expect(breadcrumbItems[1]).toHaveClass('mySelectedClass myClass');
    expect(breadcrumbItems[2]).not.toHaveClass('mySelectedClass');
  });

  it('show selected classname on only selected breadcrumb item with itemSelectedClassName', () => {
    const { container } = render(
      <Breadcrumb itemSelectedClassName="mySelectedClass">
        <BreadcrumbItem className="myClass">content 1</BreadcrumbItem>
        <BreadcrumbItem className="myClass" selected>
          content 2
        </BreadcrumbItem>
        <BreadcrumbItem className="myClass">content 3</BreadcrumbItem>
      </Breadcrumb>
    );

    expect(container.querySelectorAll('li.mySelectedClass').length).toBe(1);

    const breadcrumbItems = container.querySelectorAll('.myClass');
    expect(breadcrumbItems[0]).not.toHaveClass('mySelectedClass');
    expect(breadcrumbItems[1]).toHaveClass('mySelectedClass myClass');
    expect(breadcrumbItems[2]).not.toHaveClass('mySelectedClass');
  });

  it('should be able to render seperatorItems', () => {
    const { container } = render(
      <Breadcrumb
        className="govuk-breadcrumbs govuk-breadcrumbs__list"
        separatorItem={<span className="separator"> &gt; </span>}
      >
        <BreadcrumbItem selected={true}>content 1</BreadcrumbItem>
        <BreadcrumbItem>content 2</BreadcrumbItem>
        <BreadcrumbItem>content 3</BreadcrumbItem>
      </Breadcrumb>
    );
    const separators = container.getElementsByClassName('separator');
    expect(separators.length).toBe(2);
  });

  it('should be able to pass some extra properties', () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbItem
          className="myStyle"
          breadcrumbItemProps={{ style: { color: 'red' } }}
        >
          content 1
        </BreadcrumbItem>
        <BreadcrumbItem> content 2 </BreadcrumbItem>
        <BreadcrumbItem> content 3 </BreadcrumbItem>
      </Breadcrumb>
    );
    const labelElement = container.getElementsByClassName('myStyle');
    const style = window.getComputedStyle(labelElement[0]);
    expect(style.color).toBe('red');
  });
});
