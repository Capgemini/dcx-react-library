import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { AccordionItem, AccordionItemProps } from '../AccordionItem';
import AccordionContext from '../AccordionContext';
import { AccordionTitle } from '../AccordionTitle';
import { AccordionDetails } from '../AccordionDetails';
import AccordionItemContext from '../AccordionItemContext';

describe('AccordionItem', () => {
  const defaultProps: AccordionItemProps = {
    title: '1',
    children: [
      <AccordionTitle>
        <>Test Title</>
      </AccordionTitle>,
      <AccordionDetails className="test-class">
        <>Test Details</>
      </AccordionDetails>,
    ],
  };

  it('should render the title and details', () => {
    const { getByText } = render(<AccordionItem {...defaultProps} />);
    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Details')).toBeInTheDocument();
  });

  it('should call onClick with the correct argument when clicked', () => {
    const onClick = jest.fn();
    render(
      <AccordionContext.Provider value={{ onClick, multipleOpen: false, expanded: [] }}>
        <AccordionItem {...defaultProps} />
      </AccordionContext.Provider>
    );
    fireEvent.click(screen.getByText('Test Title'));
    expect(onClick).toHaveBeenCalledWith('1');
  });

  it('should update the selected state when clicked', () => {
    const { getByText, rerender } = render(
      <AccordionContext.Provider value={{ onClick: jest.fn(), multipleOpen: false, expanded: [] }}>
        <AccordionItem {...defaultProps} />
      </AccordionContext.Provider>
    );
    fireEvent.click(getByText('Test Title'));
    rerender(
      <AccordionContext.Provider value={{ onClick: jest.fn(), multipleOpen: false, expanded: [] }}>
        <AccordionItem {...defaultProps} />
      </AccordionContext.Provider>
    );
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('should update the AccordionItemContext value when clicked', () => {
    let contextValue;
    const { getByText } = render(
      <AccordionContext.Provider value={{ onClick: jest.fn(), multipleOpen: false, expanded: [] }}>
        <AccordionItemContext.Consumer>
          {value => {
            contextValue = value;
            return (
              <AccordionItem {...defaultProps} />
            );
          }}
        </AccordionItemContext.Consumer>
      </AccordionContext.Provider>
    );
    fireEvent.click(getByText('Test Title'));
    expect(contextValue).toEqual({ title: '' });
  });

  it('should pass extra properties to the div', () => {
    render(<AccordionItem {...defaultProps} data-testid='custom value' />);
    expect(screen.getByTestId('custom value')).toBeInTheDocument();
  });
});