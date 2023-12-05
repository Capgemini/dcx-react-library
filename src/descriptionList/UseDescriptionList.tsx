import { createContext, useContext } from 'react';

export type DescriptionListContextType = {
  /**
   * A CSS class for applying same styling to all the Definition Term
   */
  termClassName?: string;
  /**
   * A CSS class for applying same styling to all the Definition Detail
   */
  detailClassName?: string;
};

export const DescriptionListContext =
  createContext<DescriptionListContextType | undefined>(undefined);

export const useDescriptionList = () => {
  const context = useContext(DescriptionListContext);
  if (context === undefined) {
    throw new Error(
      'Term and Detail components must be used within DescriptionList component'
    );
  }
  return context;
};
