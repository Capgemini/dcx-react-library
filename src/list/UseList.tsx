import { createContext, useContext } from 'react';

export type ListContextType = {
  /**
   * A CSS class for applying same styling to all the listItems
   */
  itemClassName?: string;
};

export const ListContext =
  createContext<ListContextType | undefined>(undefined);

export const useList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('ListItem component must be used within Item component');
  }
  return context;
};
