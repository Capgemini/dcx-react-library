import React from 'react';
import { render } from '@testing-library/react';
import { AccordionDetails } from '../AccordionDetails';
import AccordionContext from '../AccordionContext';
import '@testing-library/jest-dom';

describe('AccordionDetails', () => {
  it('should render the details', () => {
    const { getByText } = render(
    <AccordionDetails id='1'>
      <>Test Details</>
    </AccordionDetails>);
    expect(getByText('Test Details')).toBeInTheDocument();
  });

  it('should apply the detailsClassName', () => {
    const { getByText } = render(
      <AccordionDetails id='1' className="test-class">
        <>Test Details</>
      </AccordionDetails>
    );
    expect(getByText('Test Details')).toHaveClass('test-class');
  });

  it('should be visible when expanded is true', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{
          multipleOpen: false,
          onClick: jest.fn(),
          expanded: ['1'],
        }}
      >
        <AccordionDetails id='1'>
          <>Test Details</>
        </AccordionDetails>
      </AccordionContext.Provider>
    );
    expect(getByText('Test Details')).toBeVisible();
  });

  it('should not be visible when expanded is false', () => {
    const { getByText } = render(
      <AccordionContext.Provider
        value={{ multipleOpen: false, onClick: jest.fn(), expanded: [] }}
      >
        <AccordionDetails id='1'>
          <>Test Details</>
        </AccordionDetails>
      </AccordionContext.Provider>
    );
    expect(getByText('Test Details')).not.toBeVisible();
  });
});
