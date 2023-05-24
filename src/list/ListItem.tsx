import React from 'react';
import { classNames } from '../common';

import { useList } from './UseList';

export type UnOrderedList = {
  /**
   * details
   */
  children: JSX.Element | string;
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * Additional props/attributes to pass in listitems
   */
  listItemProps?: React.HTMLProps<HTMLLIElement>;
};

export type OrderedList = UnOrderedList & {
  /**
   * define the value of the item
   */
  value?: string;
};

export const ListItem = (props: OrderedList) => {
  const { itemClassName, type } = useList();

  if (type === 'unordered') {
    const { children, className, listItemProps } = props;

    return (
      <li
        className={classNames(['dcx-list-item', className, itemClassName])}
        {...listItemProps}
      >
        {children}
      </li>
    );
  } else {
    const { children, className, value, listItemProps } = props;
    return (
      <li
        className={classNames(['dcx-list-item', className, itemClassName])}
        value={value}
        {...listItemProps}
      >
        {children}
      </li>
    );
  }
};
