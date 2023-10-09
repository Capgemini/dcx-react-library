import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import '@testing-library/jest-dom';

describe('Accordion Component', () => {
  it('should renders the Accordion component with a title', () => {
    const { getByText } = render(
      <Accordion title="Test Accordion" expandIcon={<span>▼</span>} details="Accordion details" />
    );
    const titleElement = getByText('Test Accordion');
    expect(titleElement).toBeInTheDocument();
  });

  it('should expands/collapses the Accordion when the title is clicked', async () => {
    render(
      <Accordion title="Title" expandIcon={<span>▼</span>} details="Details" />
    );
    const titleElement = await screen.findByText('Title');
    userEvent.click(titleElement);
    const detailsElement = await screen.findByText('Details');
    
    expect(detailsElement).toBeInTheDocument(); // Accordion is expanded

    userEvent.click(titleElement);
    await waitFor(() => {
      expect(detailsElement).not.toBeInTheDocument(); // Accordion is collapsed
    });
    
  });

  it('should expands only one accordion and collapses the others when the title is clicked', async () => {
    render(
      <>
        <Accordion title="Accordion 1" expandIcon={<span>▼</span>} details="Accordion 1 details" />
        <Accordion title="Accordion 2" expandIcon={<span>▼</span>} details="Accordion 2 details" />
        <Accordion title="Accordion 3" expandIcon={<span>▼</span>} details="Accordion 3 details" />
      </>
    );
    const accordionTitle3Element = await screen.findByText('Accordion 3');
    userEvent.click(accordionTitle3Element);
    const accordionDetails3Element = await screen.findByText('Accordion 3 details');
    expect(accordionDetails3Element).toBeInTheDocument(); // Accordion with Title Accordion 3 is expanded

    waitFor(async () => {
      const accordionDetails1Element = await screen.findByText('Accordion 1 details');
      const accordionDetails2Element = await screen.findByText('Accordion 2 details');

      expect(accordionDetails1Element).toBeNull(); // Accordion with Title Accordion 1 is collapsed
      expect(accordionDetails2Element).toBeNull(); // Accordion with Title Accordion 2 is collapsed 
    });   
  });

  it('should applies custom class names to the Accordion components', () => {
    const { container } = render(
      <Accordion
        title="Test Accordion"
        expandIcon={<span>▼</span>}
        details="Accordion details"
        containerClassName="custom-container"
        titleClassName="custom-title"
        detailsClassName="custom-details"
      />
    );
    const accordionContainer = container.querySelector('.custom-container');
    const titleElement = container.querySelector('.custom-title');

    expect(accordionContainer).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it('should applies additional props to the Accordion component', () => {
    const { container } = render(
      <Accordion
        title="Test Accordion"
        expandIcon={<span>▼</span>}
        details="Accordion details"
        props={{ 'data-testid': 'custom-test-id' }}
      />
    );
    const accordionContainer = container.querySelector('[data-testid="custom-test-id"]');

    expect(accordionContainer).toBeInTheDocument();
  });
});
