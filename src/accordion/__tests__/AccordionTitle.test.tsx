import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionTitle } from '../AccordionTitle';
import AccordionContext from '../AccordionContext';
import { AccordionItem } from '../AccordionItem';
import { AccordionDetails } from '../AccordionDetails';

describe('AccordionTitle', () => {
  it('should render the title', () => {
    const { getByText } = render(
      <AccordionTitle>
        <>Test Title</>
      </AccordionTitle>
    );
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('should apply the className', () => {
    const { getByText } = render(
      <AccordionTitle className="test-class">
        <>Test Title</>
      </AccordionTitle>
    );
    expect(getByText('Test Title')).toHaveClass('test-class');
  });

  it('should allow to pass extra properties', () => {
    const onClick = jest.fn() as any;
    render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, expanded: [], onClick }}
      >
        <AccordionTitle props={{ id: '2' }}>
          <>Test Title</>
        </AccordionTitle>
      </AccordionContext.Provider>
    );
  });

  it('should render the expandIcon when the title is in the expanded array', () => {
    const expandIcon = <span>Expand</span>;
    const { container } = render(
      <AccordionContext.Provider value={{ multipleOpen: false, onClick: jest.fn(), expanded: ['1'], expandIcon }}>
         <AccordionItem title="1">
          <AccordionTitle><span>Item 1</span></AccordionTitle>
          <AccordionDetails><span>Details 1</span></AccordionDetails>
        </AccordionItem>
      </AccordionContext.Provider>
    );
    expect(container).toContainHTML('<span>Expand</span>');
  });
  
  it('should render the collapsedIcon when the title is not in the expanded array', () => {
    const collapsedIcon = <span>Collapse</span>;
    const { container } = render(
      <AccordionContext.Provider value={{ multipleOpen: false, onClick: jest.fn(), expanded: [], collapsedIcon }}>
        <AccordionTitle>
          <>Test Title</>
        </AccordionTitle>
      </AccordionContext.Provider>
    );
    expect(container).toContainHTML('<span>Collapse</span>');
  });
  
  it('should not render the expandIcon or collapsedIcon when they are not provided', () => {
    const { container } = render(
      <AccordionContext.Provider value={{ multipleOpen: false, onClick: jest.fn(), expanded: [] }}>
        <AccordionTitle>
          <>Test Title</>
        </AccordionTitle>
      </AccordionContext.Provider>
    );
    expect(container).not.toContainHTML('<span>Expand</span>');
    expect(container).not.toContainHTML('<span>Collapse</span>');
  });
});
