import React from 'react';
import { classNames } from '../common';

export type TextProps = {
  /**
   * specify a custom class name to be applied to the Insert-text
   */
  className?: string;
  /**
   *value specified by user
   */
  value: 'insert text';
  /**
   * It will pass an id to the InsertText element
   */

  id?: string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLDivElement>;
};

export const InsertText = ({ value, className, id, props }: TextProps) => {
  const classes = classNames(['dcx-insert-text', className]);

  // Return a div element with the dynamic class name and any additional props passed to the component
  return (
    <div className={classes} id={id} {...props}>
      {value}
    </div>
  );
};
