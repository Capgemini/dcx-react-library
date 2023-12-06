import React from 'react';
import { render } from '@testing-library/react';
import { AccordionDetails } from '../AccordionDetails';
import AccordionContext from '../AccordionContext';
import '@testing-library/jest-dom';
import AccordionItemContext from '../AccordionItemContext';

describe('AccordionDetails', () => {
  it('should render the details', () => {
    const { getByText } = render(
      <AccordionDetails>
        <>Test Details</>
      </AccordionDetails>
    );
    expect(getByText('Test Details')).toBeInTheDocument();
  });

  it('should apply the detailsClassName from context', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, onClick: jest.fn(), expanded: [], detailsClassName: 'context-class' }}
      >
        <AccordionDetails>
          <>Test Details</>
        </AccordionDetails>
      </AccordionContext.Provider>
    );
    expect(getByText('Test Details')).toHaveClass('context-class');
  });
  
  it('should apply both className and detailsClassName', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, onClick: jest.fn(), expanded: [], detailsClassName: 'context-class' }}
      >
        <AccordionDetails className="prop-class">
          <>Test Details</>
        </AccordionDetails>
      </AccordionContext.Provider>
    );
    const detailsElement = getByText('Test Details');
    expect(detailsElement).toHaveClass('context-class');
    expect(detailsElement).toHaveClass('prop-class');
  });
  
  it('should be visible when title is in the expanded array', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, onClick: jest.fn(), expanded: ['Section 1'] }}
      >
        <AccordionItemContext.Provider value={{ title: 'Section 1' }}>
          <AccordionDetails>
            <>Test Details</>
          </AccordionDetails>
        </AccordionItemContext.Provider>
      </AccordionContext.Provider>
    );
    expect(getByText('Test Details')).toBeVisible();
  });
  
  it('should not be visible when title is not in the expanded array', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, onClick: jest.fn(), expanded: ['Section 2'] }}
      >
        <AccordionItemContext.Provider value={{ title: 'Section 1' }}>
          <AccordionDetails>
            <>Test Details</>
          </AccordionDetails>
        </AccordionItemContext.Provider>
      </AccordionContext.Provider>
    );
    expect(getByText('Test Details')).not.toBeVisible();
  });

  it('should allow to pass extra props', () => {
    const { getByTestId } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, onClick: jest.fn(), expanded: [] }}
      >
        <AccordionDetails data-testid="extra-prop">
          <>Test Details</>
        </AccordionDetails>
      </AccordionContext.Provider>
    );
    expect(getByTestId('extra-prop')).toBeInTheDocument();
  });
});
