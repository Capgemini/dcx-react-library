import React from 'react';
import { classNames } from '../common';

export interface CardProps {
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
  /**
   * allows to align the card horizontally or vertically
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * When the variant `interact` is specified the design system will provide style and token
   * on different interactions like hover, selected, etc
   */
  variant?: 'default' | 'interact';
  /**
   * allows to control the current selected card
   */
  selected?: boolean;
}

export const Card = ({
  children,
  className,
  variant = 'default',
  layout = 'vertical',
  selected,
  ...props
}: CardProps) => {
  return (
    <article
      className={classNames([
        'dcx-card',
        className,
        { 'dcx-card-horizontal': layout === 'horizontal' },
        { 'dcx-card-vertical': layout === 'vertical' },
        { 'dcx-card--selected': selected },
      ])}
      {...props}
    >
      {children}
    </article>
  );
};
