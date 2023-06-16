import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PreformattedText } from '../PreformattedText';

describe('PreformattedText', () => {
  it('should render with the provided text', () => {
    render(<PreformattedText value="Text in a pre element..." />);
    expect(screen.getByText('Text in a pre element...')).toBeInTheDocument();
  });
  it('should have the embedded className "dcx-pre"', () => {
    render(<PreformattedText value="Text in a pre element..." />);
    expect(screen.getByText('Text in a pre element...')).toHaveClass('dcx-pre');
  });
  it('should apply additional classes for shared styling', () => {
    render(
      <PreformattedText
        className="additional-class"
        value="Text in a pre element..."
      />
    );
    expect(screen.getByText('Text in a pre element...')).toHaveClass(
      'dcx-pre additional-class'
    );
  });
  it('should pass other props to the underlying pre tag', () => {
    render(
      <PreformattedText
        props={{ style: { color: 'red' } }}
        value="Text in a pre element..."
      />
    );
    const preElement = screen.getByText('Text in a pre element...');
    expect(preElement).toHaveAttribute('style', 'color: red;');
  });
});
