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
   * It will pass an id to the KeyboardInput element
   */
  id?: string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

export const KeyboardInput = ({
  children,
  className,
  id,
  props,
}: KeyboardInputProps) => {
  const classes = classNames(['dcx-keyboard-Input', className]);

  // Return a kbd element with the dynamic class name and any additional props passed to the component
  return (
    <kbd className={classes} id={id} {...props}>
      {children}
    </kbd>
  );
};
