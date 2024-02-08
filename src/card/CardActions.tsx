import React from 'react';
import { classNames } from '../common';

interface CardActionsProps {
  /**
   * allows to pass a child or children to the component
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
  /**
   * additional properties to support something else that we didn't plan
   */
  props?: React.HTMLAttributes<HTMLElement>;
}

export const CardActions = ({
  className,
  children,
  ...props
}: CardActionsProps) => {
  return (
    <div className={classNames(['dcx-card-actions', className])} {...props}>
      {children}
    </div>
  );
};
