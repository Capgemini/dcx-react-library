import React, { ReactNode } from 'react';
import { classNames } from '../common';
import { ListContext } from './UseList';

export type UnorderedListType = {
  /**
   * optional Type property with default value unordered to specify unordered and ordered lists
   */
  type?: 'unordered';
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * A CSS class for applying same styling to all the listItems
   */
  itemClassName?: string;
  /**
   * details
   */
  children: ReactNode;
  /**
   * Additional props/attributes
   */
  listProps?: React.HTMLAttributes<HTMLUListElement>;
};

export type OrderedListType = {
  /**
   * optional Type property with default value unordered to specify unordered and ordered lists
   */
  type?: 'ordered';
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * A CSS class for applying same styling to all the listItems
   */
  itemClassName?: string;
  /**
   * details
   */
  children: ReactNode;
  /**
   * Additional props/attributes
   */
  listProps?: React.HTMLAttributes<HTMLOListElement>;
};

export const List = ({
  type,
  className,
  itemClassName,
  children,
  listProps,
}: UnorderedListType | OrderedListType) => (
  <ListContext.Provider value={{ itemClassName }}>
    {type === 'ordered' ? (
      <OrderedList
        className={classNames(['dcx-list', className])}
        children={children}
        listProps={listProps}
      />
    ) : (
      <UnorderedList
        className={classNames(['dcx-list', className])}
        children={children}
        listProps={listProps}
      />
    )}
  </ListContext.Provider>
);

const UnorderedList = ({
  className,
  children,
  listProps,
}: UnorderedListType) => (
  <ul className={className} {...listProps}>
    {children}
  </ul>
);

const OrderedList = ({ className, children, listProps }: OrderedListType) => (
  <ol className={className} {...listProps}>
    {children}
  </ol>
);
