import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../Accordion';
import '@testing-library/jest-dom';
import AccordionContext from '../AccordionContext';

describe('Accordion Component with multipleOpen prop', () => {
  it('should allow multiple sections to be open at the same time when multipleOpen is true', async () => {
    render(
      <>
        <Accordion title="Accordion 1" expandIcon={<span>▼</span>} details="Accordion 1 details" multipleOpen />
        <Accordion title="Accordion 2" expandIcon={<span>▼</span>} details="Accordion 2 details" multipleOpen />
      </>
    );
    const accordionTitle1Element = await screen.findByText('Accordion 1');
    const accordionTitle2Element = await screen.findByText('Accordion 2');
    userEvent.click(accordionTitle1Element);
    userEvent.click(accordionTitle2Element);
    const accordionDetails1Element = await screen.findByText('Accordion 1 details');
    const accordionDetails2Element = await screen.findByText('Accordion 2 details');

    expect(accordionDetails1Element).toBeInTheDocument(); // Accordion 1 is expanded
    expect(accordionDetails2Element).toBeInTheDocument(); // Accordion 2 is expanded
  });

  it('should only allow one section to be open at a time when multipleOpen is false', async () => {
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

  it('should collapse the section when the same section is expanded and multipleOpen is true', async () => {
    render(
      <>
        <Accordion title="Accordion 1" expandIcon={<span>▼</span>} details="Accordion 1 details" multipleOpen/>
        <Accordion title="Accordion 2" expandIcon={<span>▼</span>} details="Accordion 2 details" multipleOpen/>
      </>
    );
    const accordionTitle1Element = await screen.findByText('Accordion 1');
    userEvent.click(accordionTitle1Element);
    const accordionDetails1Element = await screen.findByText('Accordion 1 details');
    expect(accordionDetails1Element).toBeInTheDocument(); // Accordion with Title Accordion 1 is expanded
    userEvent.click(accordionTitle1Element);
    waitFor(async () => {
      const accordionDetails1Element = await screen.findByText('Accordion 1 details');
      expect(accordionDetails1Element).toBeNull(); // Accordion with Title Accordion 1 is collapsed 
    });
   
  });

  it('should collapse the section when the same section is expanded and multipleOpen is false', async () => {
    render(
      <>
        <Accordion title="Accordion 1" expandIcon={<span>▼</span>} details="Accordion 1 details" />
        <Accordion title="Accordion 2" expandIcon={<span>▼</span>} details="Accordion 2 details" />
      </>
    );
    const accordionTitle2Element = await screen.findByText('Accordion 2');
    userEvent.click(accordionTitle2Element);
    const accordionDetails2Element = await screen.findByText('Accordion 2 details');
    expect(accordionDetails2Element).toBeInTheDocument(); // Accordion with Title Accordion 2 is expanded
    userEvent.click(accordionTitle2Element);
    waitFor(async () => {
      const accordionDetails2Element = await screen.findByText('Accordion 2 details');
      expect(accordionDetails2Element).toBeNull(); // Accordion with Title Accordion 2 is collapsed 
    });   
  }); 
});

describe('Accordion', () => {
  it('should call setActiveTitle with the correct arguments when multipleOpen is true', async () => {
    const onClick = jest.fn() as any;
    const { getByText } = render(
      <AccordionContext.Provider value={{ multipleOpen: false, expanded: '', onClick }}>
        <Accordion title="Test Title" details="Test Details" />
      </AccordionContext.Provider>
    );
    fireEvent.click(getByText('Test Title'));
    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should call setActiveTitle with the correct arguments when multipleOpen is false and activeTitle is not the clicked title', async () => {
    const onClick = jest.fn() as any;
    const { getByText } = render(
      <AccordionContext.Provider value={{ multipleOpen: false, expanded: '', onClick }}>
        <Accordion title="Test Title" details="Test Details" />
      </AccordionContext.Provider>
    );
    fireEvent.click(getByText('Test Title'));
    expect(await screen.findByText('Test Details')).toBeInTheDocument();
  });

  it('should call setActiveTitle with an empty string when multipleOpen is false and activeTitle is the clicked title', async () => {
    const onClick = jest.fn() as any;
    const { getByText } = render(
      <AccordionContext.Provider value={{ multipleOpen: false, expanded: '', onClick }}>
        <Accordion title="Test Title" details="Test Details" />
      </AccordionContext.Provider>
    );
    fireEvent.click(getByText('Test Title'));
    fireEvent.click(getByText('Test Title'));
    waitFor(async () => {
      expect(await screen.findByText('Test Details')).toBeNull();
    });
  });
});