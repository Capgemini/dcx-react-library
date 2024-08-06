import React from 'react';
import { renderHook } from '@testing-library/react';
import { StepperContext, useStepper } from '../UseStepper';

describe('useStepper', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <StepperContext.Provider value={{ activeStep: 0, changeActiveStep: jest.fn() }}>
      {children}
    </StepperContext.Provider>
  );

  it('provides activeStep as a number', () => {
    const { result } = renderHook(() => useStepper(), { wrapper });
    expect(typeof result.current.activeStep).toBe('number');
  });

  it('provides changeActiveStep as a function', () => {
    const { result } = renderHook(() => useStepper(), { wrapper });
    expect(typeof result.current.changeActiveStep).toBe('function');
  });

  it('throws an error if used outside of StepperContext', () => {
    expect(() => {
      renderHook(() => useStepper());
    }).toThrow('Step must be used within a Stepper');
  });
});
