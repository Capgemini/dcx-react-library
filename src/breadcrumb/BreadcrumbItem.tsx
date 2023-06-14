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
  /**
   * allow to specify a user with Additional props/attributes
   */
  breadcrumbItemProps?: React.HTMLProps<HTMLLIElement>;
};

export const BreadcrumbItem = ({
  className,
  children,
  selectedClassName,
  selected,
  breadcrumbItemProps,
}: BreadcrumItemProps) => {
  const { itemsClassName, itemSelectedClassName, separatorItem } =
    useBreadcrumb();

  const classes: string = classNames([
    className,
    itemsClassName,
    {
      [`${selectedClassName}`]: selected,
      [`${itemSelectedClassName}`]: selected,
    },
  ]);

  return (
    <>
      <li className={classes} {...breadcrumbItemProps}>
        {separatorItem}
        {children}
      </li>
    </>
  );
};
