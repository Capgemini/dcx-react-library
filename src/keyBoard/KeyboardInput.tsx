import React from 'react';
import { classNames } from '../common';

export type KeyboardInputProps = {
  /**
   * Specify a custom class name to be applied to the KeyboardInput
   */
  className?: string;
  /**
   * Value specified by the user
   */
  children: React.ReactNode;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

export const KeyboardInput = ({
  children,
  className,
  props,
}: KeyboardInputProps) => {
  const classes = classNames(['dcx-keyboard-input', className]);

  // Return a kbd element with the dynamic class name and any additional props passed to the component
  return (
    <kbd className={classes} {...props}>
      {children}
    </kbd>
  );
};
