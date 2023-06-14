import { createContext, useContext } from 'react';

export type BreadcrumbContextType = {
  /**
   * A CSS class for applying same styling to all the BreadcrumbItems
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
};

export const BreadcrumbContext =
  createContext<BreadcrumbContextType | undefined>(undefined);

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error(
      'BreadcrumbItem component must be used within Breadcrumb component'
    );
  }
  return context;
};
