import { createContext, useContext } from 'react';

export type BreadcrumbContextType = {
  /**
   * A CSS class for applying same styling to all the BreadcrumbItems
   */
  itemsClassName?: string;
  itemSelectedClassName?: string;
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
