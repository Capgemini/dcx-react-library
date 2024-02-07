import React from 'react';
import { classNames } from '../common';

interface CardFooterProps {
  children: JSX.Element;
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
  /**
   * additional properties to support something else that we didn't plan
   */
  props?: React.HTMLAttributes<HTMLElement>;
}

export const CardFooter = ({
  className,
  children,
  ...props
}: CardFooterProps) => {
  return (
    <div className={classNames(['dcx-card-footer', className])} {...props}>
      {children}
    </div>
  );
};
