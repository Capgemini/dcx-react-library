import React from 'react';
import { classNames } from '../common';

export type StepContentProps = {
  /**
   * it will allow to specify the content you prefer
   */
  children?: any;
  /**
   * will allow to style the content of each step
   */
  className?: string;
  /**
   * allow to show hide the content
   */
  visible?: boolean;
};

export const StepContent = ({
  children,
  className,
  visible,
}: StepContentProps) => (
  <div
    role="tabPanel"
    className={classNames(['dcx-stepper-content', className])}
    style={{
      display: visible ? 'inherit' : 'none',
    }}
  >
    {children}
  </div>
);
