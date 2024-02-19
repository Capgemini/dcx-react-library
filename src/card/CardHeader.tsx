import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

type CardHeaderProps = {
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
};

export const CardHeader = ({
  className,
  children,
  ...props
}: CardHeaderProps) => {
  const { layout, variant } = useContext(CardContext);

  return (
    <div
      className={classNames([
        'dcx-card-header',
        className,
        `dcx-card-header-${layout}`,
        `dcx-card-header-${variant}`,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};
