import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionTitle } from '../AccordionTitle';
import AccordionContext from '../AccordionContext';

describe('AccordionTitle', () => {
  it('should render the title', () => {
    const { getByText } = render(<AccordionTitle title="Test Title" />);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('should apply the titleClassName', () => {
    const { getByText } = render(
      <AccordionTitle title="Test Title" titleClassName="test-class" />
    );
    expect(getByText('Test Title')).toHaveClass('test-class');
  });

  it('should render the expandIcon', () => {
    const { container } = render(
      <AccordionTitle title="Test Title" expandIcon={<span>▼</span>} />
    );
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('should call the onClick function from context when clicked', () => {
    const onClick = jest.fn() as any;
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, expanded: '', onClick }}
      >
        <AccordionTitle title="Test Title" />
      </AccordionContext.Provider>
    );

    fireEvent.click(getByText('Test Title'));

    expect(onClick).toHaveBeenCalled();
  });
});
