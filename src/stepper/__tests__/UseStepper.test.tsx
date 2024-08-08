import React from 'react';
import { render } from '@testing-library/react';
import { StepperContext, StepperContextProps, useStepper } from '../UseStepper';
import '@testing-library/jest-dom';

const TestComponent: React.FC = () => {
  const { activeStep, changeActiveStep } = useStepper();

  return (
    <div>
      <span data-testid="active-step">{activeStep}</span>
      <button onClick={() => changeActiveStep(2)}>Change Step</button>
    </div>
  );
};

describe('useStepper', () => {
  it('provides activeStep as a number', () => {
    const mockContextValue: StepperContextProps = {
      activeStep: 0,
      changeActiveStep: jest.fn(),
    };

    const { getByTestId } = render(
      <StepperContext.Provider value={mockContextValue}>
        <TestComponent />
      </StepperContext.Provider>
    );

    expect(getByTestId('active-step')).toHaveTextContent('0');
  });

  it('calls changeActiveStep when the button is clicked', () => {
    const mockChangeActiveStep = jest.fn();
    const mockContextValue: StepperContextProps = {
      activeStep: 0,
      changeActiveStep: mockChangeActiveStep,
    };

    const { getByText } = render(
      <StepperContext.Provider value={mockContextValue}>
        <TestComponent />
      </StepperContext.Provider>
    );

    const button = getByText('Change Step');
    button.click();

    expect(mockChangeActiveStep).toHaveBeenCalledWith(2);
  });

  it('throws an error if used outside of StepperContext', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('Step must be used within a Stepper');

    consoleErrorSpy.mockRestore();
  });
});
