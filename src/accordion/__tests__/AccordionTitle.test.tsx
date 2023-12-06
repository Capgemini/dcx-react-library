import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AccordionTitle } from '../AccordionTitle';
import AccordionContext from '../AccordionContext';

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
});
