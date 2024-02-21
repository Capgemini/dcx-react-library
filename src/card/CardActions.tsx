import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

type CardActionsProps = {
  /**
   * allows to pass a child or children to the component
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

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
