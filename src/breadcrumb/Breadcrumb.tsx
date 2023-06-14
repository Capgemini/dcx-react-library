import React from 'react';
import { classNames } from '../common';
import { BreadcrumbContext } from './UseBreadcrumb';

export type BreadcrumbProps = {
  /**
   * allow to specify a custom content
   */
  children: JSX.Element[];
  /**
   * A CSS class for styling Breadcrumb
   */
  className?: string;
  /**
   * A CSS class for applying the same styling in case all the BreadcrumbItems have exactly the same look and feel
   */
  itemsClassName?: string;
  /**
   * A CSS class for applying the same styling to all the BreadcrumbItems
   */
  itemSelectedClassName?: string;
  /**
   * allow to specify a user to add a separator
   */
  separatorItem?: JSX.Element;
  /**
   * allow to specify a user with Additional props/attributes
   */
  breadcrumbsProps?: React.HTMLAttributes<HTMLOListElement>;
};

export const Breadcrumb = ({
  children,
  itemsClassName,
  className,
  itemSelectedClassName,
  separatorItem,
  breadcrumbsProps,
}: BreadcrumbProps) => (
  <BreadcrumbContext.Provider
    value={{
      itemsClassName,
      itemSelectedClassName,
      separatorItem,
    }}
  >
    <ol className={classNames([className])} {...breadcrumbsProps}>
      {React.Children.map(children, (child: JSX.Element, index: number) =>
        React.cloneElement(child, { isFirst: index === 0 })
      )}
    </ol>
  </BreadcrumbContext.Provider>
);
