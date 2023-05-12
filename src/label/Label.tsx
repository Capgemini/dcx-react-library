import React from 'react';
import { classNames } from '../common';

type labelProps = {
  /**
   * A CSS class for styling label
   */
  className?: string;
  /**
   * Allows us to use the Value in label
   */
  value?: string;
  /**
   * it will pass an id to the label element
   */
  id?: string;
};

export const Label = ({ className, value, id, ...props }: labelProps) => (
  <label className={classNames(['dcx-label', className])} id={id} {...props}>
    {value}
  </label>
);
