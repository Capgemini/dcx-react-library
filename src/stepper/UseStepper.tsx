import { createContext, useContext } from 'react';

export type StepperContextProps = {
  /**
   * it will provide the current step
   */
  activeStep: number;
  /**
   * it will allow to set the current step
   */
  changeActiveStep: (step: number) => void;
};

export const StepperContext =
  createContext<StepperContextProps | undefined>(undefined);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (context === undefined) {
    throw new Error('Step must be used within a Stepper');
  }
  return context;
};
