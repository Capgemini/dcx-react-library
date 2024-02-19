import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

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
  const { layout, variant } = useContext(CardContext);
  return (
    <div
      className={classNames([
        'dcx-card-actions',
        `dcx-card-actions-${layout}`,
        `dcx-card-actions-${variant}`,
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};
