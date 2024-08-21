import React from 'react';

type StepProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * The children prop is an array of JSX elements that represent the content of the step.
   */
  children: JSX.Element[];
};

export const Step = ({ children, ...rest }: StepProps) => (
  <div {...rest}>
    {children}
  </div>
);