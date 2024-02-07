import React from 'react';
import { classNames } from '../common';

type CardProps = {
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

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <article className={classNames(['dcx-card', className])} {...props}>
      {children}
    </article>
  );
};
