import { useContext } from 'react';
import { ListContext } from './List';

export const useList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('ListItem component must be used within Item component');
  }
  return context;
};
