import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

interface CardContentProps {
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

export const CardContent = ({
  className,
  children,
  ...props
}: CardContentProps) => {
  const { layout, variant } = useContext(CardContext);
  return (
    <div
      className={classNames([
        'dcx-card-content',
        `dcx-card-content-${layout}`,
        `dcx-card-content-${variant}`,
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};
