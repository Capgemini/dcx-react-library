import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionTitle } from '../AccordionTitle';
import AccordionContext from '../AccordionContext';

describe('AccordionTitle', () => {
  it('should render the title', () => {
    const { getByText } = render(<AccordionTitle id ='2'><>Test Title</></AccordionTitle>);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('should apply the className', () => {
    const { getByText } = render(
      <AccordionTitle id ='2' className="test-class">
        <>Test Title</>
      </AccordionTitle>
    );
    expect(getByText('Test Title')).toHaveClass('test-class');
  });

  it('should render the expandIcon', () => {
    const { container } = render(
      <AccordionTitle id ='2' expandIcon={<span>▼</span>}>
        <>Test Title</>
      </AccordionTitle>
    );
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('should call the onClick function from context when clicked', () => {
    const onClick = jest.fn() as any;
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, expanded: [], onClick }}
      >
        <AccordionTitle id ='2'><>Test Title</></AccordionTitle>
      </AccordionContext.Provider>
    );

    fireEvent.click(getByText('Test Title'));

    expect(onClick).toHaveBeenCalledWith('2');
  });
});
