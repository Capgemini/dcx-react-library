import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AccordionItem from '../AccordionItem';

describe('AccordionItem', () => {
  it('should render the title and details', () => {
    const { getByText } = render(<AccordionItem title="Test Title" details="Test Details" titleClassName="" detailsClassName="" />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Details')).toBeInTheDocument();
  });
  
  it('should render the expandIcon when provided', () => {
    const { getByTestId } = render(
      <AccordionItem title="Test Title" details="Test Details" titleClassName="" detailsClassName="" expandIcon={<div data-testid="expand-icon" />} />
    );
    expect(getByTestId('expand-icon')).toBeInTheDocument();
  });
  
  it('should pass accordionProps to the root div', () => {
    const { getByTestId } = render(
      <AccordionItem title="Test Title" details="Test Details" titleClassName="" detailsClassName="" accordionProps={{ 'data-testid': 'accordion-item' }} />
    );
    expect(getByTestId('accordion-item')).toBeInTheDocument();
  });
});