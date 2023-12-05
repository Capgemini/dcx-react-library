import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { AccordionItem } from '../AccordionItem';
import AccordionContext from '../AccordionContext';
import { AccordionTitle } from '../AccordionTitle';
import { AccordionDetails } from '../AccordionDetails';

describe('AccordionItem', () => {
  it('should render the title and details', () => {
    const { getByText } = render(
      <AccordionItem>
        <AccordionTitle id='1' expandIcon={<span>▼</span>}>
          <>Test Title</>
        </AccordionTitle>
        <AccordionDetails
          id='1'
          className="test-class"
        >
          <>Test Details</>
        </AccordionDetails>
      </AccordionItem>
    );
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Details')).toBeInTheDocument();
  });

  it('should render the expandIcon when provided', () => {
    render(
      <AccordionItem>
        <AccordionTitle id='1' expandIcon={<span>▼</span>}>
          <>Test Title</>
        </AccordionTitle>
        <AccordionDetails
          id='1'
          className="test-class"
        >
          <>Test Details</>
        </AccordionDetails>
      </AccordionItem>
    );
    const spanElement = screen.getByText('▼');
    expect(spanElement).toBeInTheDocument();
  });

  it('should expand and collapse the details when clicked', () => {
    const onClick = jest.fn() as any;
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ expanded: [''], onClick, multipleOpen: false }}
      >
        <AccordionItem>
          <AccordionTitle id='1' expandIcon={<span>▼</span>}>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails
            id='1'
            className="test-class"
          >
            <>Test Details</>
          </AccordionDetails>          
        </AccordionItem>
      </AccordionContext.Provider>
    );

    fireEvent.click(getByText('Test Title'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should show the details when the title is the expanded item in the context', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{
          expanded: ['1'],
          onClick: () => {},
          multipleOpen: false,
        }}
      >
        <AccordionItem>
          <AccordionTitle id='1' expandIcon={<span>▼</span>}>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails
            id='1'
            className="test-class"
          >
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </AccordionContext.Provider>
    );

    expect(getByText('Test Details')).toBeVisible();
  });

  it('should hide the details when the title is not the expanded item in the context', () => {
    render(
      <AccordionContext.Provider
        value={{
          expanded: ['Another Title'],
          onClick: () => {},
          multipleOpen: false,
        }}
      >
        <AccordionItem>
          <AccordionTitle id='1' expandIcon={<span>▼</span>}>
            <>Test Title</>
          </AccordionTitle>
          <AccordionDetails
            id='1'
            className="test-class"
          >
            <>Test Details</>
          </AccordionDetails>
        </AccordionItem>
      </AccordionContext.Provider>
    );

    waitFor(async () => {
      expect(await screen.findByText('Test Details')).toBeNull();
    });
  });
});
