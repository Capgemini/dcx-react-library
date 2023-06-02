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
};

export const BreadcrumbItem = ({ className, children }: BreadcrumItemProps) => {
  const { itemsClassName } = useBreadcrumb();

  return (
    <li className={classNames([className, itemsClassName])}>{children}</li>
  );
};
