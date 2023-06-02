import React, { ReactNode } from 'react';
import { classNames } from '../common';
import { BreadcrumbContext } from './UseBreadcrumb';

export type BreadcrumbProps = {
  /**
   * allow to specify a custom content
   */
  children: ReactNode;
  /**
   * A CSS class for styling Breadcrumb
   */
  className?: string;
  /**
   * A CSS class for applying the same styling in case all the BreadcrumbItems have exactly the same look and feel
   */
  itemsClassName?: string;
};

export const Breadcrumb = ({
  children,
  itemsClassName,
  className,
}: BreadcrumbProps) => (
  <BreadcrumbContext.Provider value={{ itemsClassName }}>
    <ol className={classNames([className])}>{children}</ol>
  </BreadcrumbContext.Provider>
);
