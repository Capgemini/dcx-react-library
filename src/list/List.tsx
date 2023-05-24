import React, { ReactNode, createContext } from 'react';
import { classNames } from '../common';

export type ListProps = {
  /**
   * details
   */
  children: ReactNode;
  /**
   * optional Type property with default value unordered to specify unordered and ordered lists
   */
  type?: 'unordered' | 'ordered';
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * A CSS class for applying same styling to all the listItems
   */
  itemClassName?: string;
  /**
   * Additional props/attributes
   */
  listProps?:
    | React.HTMLAttributes<HTMLOListElement>
    | React.HTMLAttributes<HTMLUListElement>;
};

type ElementType = 'ul' | 'ol';

export type ListContextType = {
  /**
   * A CSS class for applying same styling to all the listItems
   */
  itemClassName?: string;
};

export const ListContext =
  createContext<ListContextType | undefined>(undefined);

export const List = ({
  type = 'unordered',
  className,
  listProps,
  children,
  itemClassName,
}: ListProps) => {
  const Element: ElementType = type === 'unordered' ? 'ul' : 'ol';
  return (
    <ListContext.Provider value={{ itemClassName }}>
      <Element className={classNames(['dcx-list', className])} {...listProps}>
        {children}
      </Element>
    </ListContext.Provider>
  );
};
