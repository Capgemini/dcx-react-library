import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordionItemContext from '../AccordionItemContext';

describe('AccordionItemContext', () => {
  it('provides the correct initial context value', () => {
    let contextValue;
    render(
      <AccordionItemContext.Consumer>
        {value => {
          contextValue = value;
          return null;
        }}
      </AccordionItemContext.Consumer>
    );
    expect(contextValue).toEqual({ title: '' });
  });

  it('provides the correct context value when it is set', () => {
    let contextValue;
    render(
      <AccordionItemContext.Provider value={{ title: 'Section 1' }}>
        <AccordionItemContext.Consumer>
          {value => {
            contextValue = value;
            return null;
          }}
        </AccordionItemContext.Consumer>
      </AccordionItemContext.Provider>
    );
    expect(contextValue).toEqual({ title: 'Section 1' });
  });
});