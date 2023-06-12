import React, { ReactNode } from 'react';
import { classNames } from '../common';
import { useBreadcrumb } from './UseBreadcrumb';

export type BreadcrumItemProps = {
  /**
   * allow to specify a custom content
   */
  children: ReactNode;
  /**
   * A CSS class for styling BreadcrumbItem
   */
  className?: string;
  /**
   * A CSS class for styling selected BreadcrumbItem
   */
  selectedClassName?: string;
  /**
   * selecting a BreadcrumbItem
   */
  selected?: boolean;
};

export const BreadcrumbItem = ({
  className,
  children,
  selectedClassName,
  selected,
}: BreadcrumItemProps) => {
  const { itemsClassName, itemSelectedClassName } = useBreadcrumb();

  const classes: string = classNames([
    className,
    itemsClassName,
    {
      [`${selectedClassName}`]: selected,
      [`${itemSelectedClassName}`]: selected,
    },
  ]);

  return <li className={classes}>{children}</li>;
};
