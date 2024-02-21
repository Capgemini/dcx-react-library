import React, { useContext } from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

type CardFooterProps = {
  /**
   * allows to pass a child or children to the component
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const CardFooter = ({
  className,
  children,
  ...props
}: CardFooterProps) => {
  const { layout, variant } = useContext(CardContext);
  return (
    <div
      className={classNames([
        'dcx-card-footer',
        `dcx-card-footer-${layout}`,
        `dcx-card-footer-${variant}`,
        className,
      ])}
      {...props}
    >
      {children}
    </div>
  );
};
