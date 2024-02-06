import React from 'react';
import { classNames } from '../common';

type CardHeaderProps = {
  children: JSX.Element;
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
  /**
   * additional properties to support something else that we didn't plan
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

export const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps) => {
  return (
    <h4 className={classNames(['dcx-card-header', className])} {...props}>
      {children}
    </h4>
  );
};
