import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StepHeader } from '../StepHeader';
import { useStepper } from '../UseStepper';

jest.mock('../UseStepper');

describe('StepHeader', () => {
  const mockChangeActiveStep = jest.fn();
  
  beforeEach(() => {
    (useStepper as jest.Mock).mockReturnValue({
      changeActiveStep: mockChangeActiveStep,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with default props', () => {
    render(<StepHeader />);
    const button = screen.getByRole('tab');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('dcx-stepper-header-content');
  });

  test('renders children correctly', () => {
    render(<StepHeader><span>Step 1</span></StepHeader>);
    const child = screen.getByText('Step 1');
    expect(child).toBeInTheDocument();
  });

  test('applies custom class names', () => {
    render(<StepHeader headerClassName="custom-class" />);
    const button = screen.getByRole('tab');
    expect(button).toHaveClass('dcx-stepper-header-content custom-class');
  });

  test('calls changeActiveStep with correct index when clicked', () => {
    render(<StepHeader _index={2} />);
    const button = screen.getByRole('tab');
    fireEvent.click(button);
    expect(mockChangeActiveStep).toHaveBeenCalledWith(2);
  });

  test('renders the separator correctly', () => {
    render(<StepHeader separator={<span>Separator</span>} />);
    const separator = screen.getByText('Separator');
    expect(separator).toBeInTheDocument();
  });
});