import React from 'react';

export type StepProps = {
  /**
   * The children prop is an array of JSX elements that represent the content of the step.
   */
  children: JSX.Element[];
};

export const Step = ({ children }: StepProps) => <>{children}</>;