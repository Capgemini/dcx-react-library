import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stepper } from '../Stepper';
import { Step } from '../Step';
import { StepHeader } from '../StepHeader';
import { StepContent } from '../StepContent';

describe('Stepper Component', () => {

  it('renders Stepper component with default props', () => {
    render(
      <Stepper selectedStep={1}>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('throws an error if Step is used outside of Stepper', () => {
    expect(() => {
      render(
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
      );
    }).toThrow('Step must be used within a Stepper');
  });

  it('sets the active step based on selectedStep prop', () => {
    render(
      <Stepper selectedStep={1}>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('Step 2').parentElement).toHaveClass('dcx-stepper-header-container');
  });

  it('changes active step on header click', () => {
    render(
      <Stepper>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    fireEvent.click(screen.getByText('Step 2'));
    expect(screen.getByText('Step 2').parentElement).toHaveClass('dcx-stepper-header-container');
  });

  it('applies custom class names', () => {
    render(
      <Stepper
        stepperClassName="custom-stepper"
        headerContainerClassNames="custom-header-container"
        contentContainerClassNames="custom-content-container"
      >
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('Step 1').parentElement?.parentElement).toHaveClass('dcx-stepper dcx-horizontal-stepper custom-stepper');
    expect(screen.getByText('Content 1').parentElement?.parentElement).toHaveClass('dcx-stepper dcx-horizontal-stepper custom-stepper');
  });

  it('renders custom separator', () => {
    render(
      <Stepper separator={<span>|</span>}>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    const separators = document.querySelectorAll('span');
    expect(separators.length).toBeGreaterThan(0);
    expect(separators[0]).toHaveTextContent('|');
  });

  it('updates active step when selectedStep prop changes', () => {
    const { rerender } = render(
      <Stepper selectedStep={0}>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('Step 1').parentElement).toHaveClass('dcx-stepper-header-container');

    rerender(
      <Stepper selectedStep={1}>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('Step 2').parentElement).toHaveClass('dcx-stepper-header-container');
  });

  it('renders correctly with no steps', () => {
    render(<Stepper selectedStep={0} children={[]} />);
    expect(screen.queryByText('Step 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Step 2')).not.toBeInTheDocument();
  });

  it('renders correctly with one step', () => {
    render(
      <Stepper selectedStep={0}>
        {[
          <Step key={1}>
            <StepHeader>Step 1</StepHeader>
            <StepContent>Content 1</StepContent>
          </Step>
        ]}
      </Stepper>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('handles out of bounds selectedStep prop', () => {
    render(
      <Stepper selectedStep={3}>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('Step 2').parentElement).toHaveClass('dcx-stepper-header-container');
  });

  it('updates context when step header is clicked', () => {
    render(
      <Stepper>
        <Step>
          <StepHeader>Step 1</StepHeader>
          <StepContent>Content 1</StepContent>
        </Step>
        <Step>
          <StepHeader>Step 2</StepHeader>
          <StepContent>Content 2</StepContent>
        </Step>
      </Stepper>
    );

    fireEvent.click(screen.getByText('Step 2'));
    expect(screen.getByText('Content 2').parentElement).toHaveClass('dcx-stepper-content-container');
  });
});
