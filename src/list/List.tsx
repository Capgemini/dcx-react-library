import React, { ReactNode } from 'react';
import { classNames } from '../common';
import { ListContext } from './UseList';

export enum TYPE_LIST {
  UNORDERED = 'unordered',
  ORDERED = 'ordered',
}

//ul
export type UnorderedListType = {
  /**
   * allow to specify if the list is ul (unordered) or ol (ordered), with default value unordered.
   * To specify the type of list please pass: TYPE_LIST. UNORDERED or TYPE_LIST. ORDERED
   */
  type?: TYPE_LIST.UNORDERED;
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * A CSS class for applying  the same styling in case all the items have exactly the same look and feel
   */
  itemClassName?: string;
  /**
   * allow to specify a user custom content
   */
  children: ReactNode;
  /**
   * allow to specify a user with Additional props/attributes
   */
  listProps?: React.HTMLAttributes<HTMLUListElement>;
};

//ol
export type OrderedListType = {
  /**
   * allow to specify if the list is ul (unordered) or ol (ordered), with default value unordered.
   * To specify the type of list please pass: TYPE_LIST. UNORDERED or TYPE_LIST. ORDERED
   */
  type?: TYPE_LIST.ORDERED;
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * A CSS class for applying  the same styling in case all the items have exactly the same look and feel
   */
  itemClassName?: string;
  /**
   * allow to specify a user custom content
   */
  children: ReactNode;
  /**
   * allow to specify a user with Additional props/attributes
   */
  listProps?: React.HTMLAttributes<HTMLOListElement>;
  /**
   * specifies the list order should be in descending order
   */
  reversed?: boolean;
  /**
   * specifies the start value of the first list item
   */
  start?: number;
  /**
   * specifies the type of marking among "1 - a - A - i - I"
   */
  markerType?: 'a' | 'i' | '1' | 'A' | 'I';
};

export const List = (props: OrderedListType | UnorderedListType) => {
  const { type, className, itemClassName, children, listProps } = props;

  return (
    <ListContext.Provider value={{ itemClassName }}>
      {type === TYPE_LIST.ORDERED ? (
        <OrderedList
          className={classNames(['dcx-list', className])}
          children={children}
          listProps={listProps}
          markerType={props.markerType}
          reversed={props.reversed}
          start={props.start}
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
};

const UnorderedList = ({
  className,
  children,
  listProps,
}: UnorderedListType) => (
  <ul className={className} {...listProps}>
    {children}
  </ul>
);

const OrderedList = ({
  className,
  children,
  listProps,
  reversed,
  markerType,
  start,
}: OrderedListType) => (
  <ol
    className={className}
    {...listProps}
    reversed={reversed}
    start={start}
    type={markerType}
  >
    {children}
  </ol>
);
