import React from 'react';
import { classNames } from '../common';

export type Props = {
  /**
   * Specify a custom class name to be applied to the KeyboardInput
   */
  className?: string;
  /**
   * Value specified by the user
   */
  value: React.ReactNode;
  /**
   * Child components can also used for KeyboardInput content
   */
  children: JSX.Element;
  /**
   * It will pass an id to the KeyboardInput element
   */
  id?: string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

type KeyboardInputValue = Omit<Props, 'children'>;
type KeyboardInputChildren = Omit<Props, 'value'>;
type KeyboardInputProps = KeyboardInputValue | KeyboardInputChildren;

const isValueType = (p: any): p is KeyboardInputValue => !!p.value;
const isChildrenType = (p: any): p is KeyboardInputChildren => !!p.children;

export const KeyboardInput = ({
  className,
  id,
  props,
  ...rest
}: KeyboardInputProps) => {
  const classes = classNames(['dcx-keyboard-Input', className]);

  let content!: React.ReactNode | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  // Return a kbd element with the dynamic class name and any additional props passed to the component
  return (
    <kbd className={classes} id={id} {...props}>
      {content}
    </kbd>
  );
};
