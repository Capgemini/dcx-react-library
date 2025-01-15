import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Step } from '../Step';

describe('Step', () => {
  it('should render the Step component with children', () => {
    const { getByText } = render(
      <Step>
        {[<div key="1">Step Content</div>]}
      </Step>
    );
    expect(getByText('Step Content')).toBeInTheDocument();
  });

  it('should render the Step component with multiple children', () => {
    const { getByText } = render(
      <Step>
        {[<div key="1">Step 1</div>, <div key="2">Step 2</div>]}
      </Step>
    );
    expect(getByText('Step 1')).toBeInTheDocument();
    expect(getByText('Step 2')).toBeInTheDocument();
  });

  it('applies additional props correctly', () => {
    render(
      <Step className="custom-step" data-testid="step">
        {[<div key='1'>Step 1</div>]}
      </Step>
    );

    const stepElement = screen.getByTestId('step');
    expect(stepElement).toHaveClass('custom-step');
  });
});