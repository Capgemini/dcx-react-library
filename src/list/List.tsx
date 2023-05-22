import React, { createContext, useContext } from 'react';
import { classNames } from '../common';

export type list = {
  /**
   * details
   */
  children: JSX.Element[] | JSX.Element;
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

export type listItem = {
  /**
   * details
   */
  children: JSX.Element | string;
  /**
   * define the value of the item
   */
  value: string;
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * Additional props/attributes to pass in listitems
   */
  listItemProps?: React.HTMLProps<HTMLLIElement>;
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
}: list) => {
  const Element: ElementType = type === 'unordered' ? 'ul' : 'ol';
  return (
    <ListContext.Provider value={{ itemClassName }}>
      <Element className={classNames(['dcx-list', className])} {...listProps}>
        {children}
      </Element>
    </ListContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('ListItem component must be used within Item component');
  }
  return context;
};

export const ListItem = ({
  listItemProps,
  className,
  children,
  value,
}: listItem) => {
  const { itemClassName } = useList();

  return (
    <li
      className={classNames(['dcx-list-item', className, itemClassName])}
      value={value}
      {...listItemProps}
    >
      {children}
    </li>
  );
};
