import React from 'react';
import { classNames } from '../common';
import CardContext from './CardContext';

export type CardProps = {
  /**
   * allows to pass a child or children to the component
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Relevant classes for shared / reusable styling
   */
  className?: string;
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
} & React.HTMLAttributes<HTMLElement>;

export const Card = ({
  children,
  className,
  variant = 'default',
  layout = 'vertical',
  selected,
  ...props
}: CardProps) => (
  <CardContext.Provider
    value={{
      layout,
      variant,
    }}
  >
    <article
      className={classNames([
        'dcx-card',
        className,
        `dcx-card-${layout}`,
        `dcx-card-${variant}`,
        { 'dcx-card--selected': selected },
      ])}
      {...props}
    >
      {children}
    </article>
  </CardContext.Provider>
);
