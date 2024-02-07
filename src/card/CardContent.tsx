import React from 'react';
import { classNames } from '../common';

interface CardContentProps {
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

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => {
  return (
    <div className={classNames(['dcx-card-content', className])} {...props}>
      {children}
    </div>
  );
};
