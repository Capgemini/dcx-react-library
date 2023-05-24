import React from 'react';
import { classNames } from '../common';

import { useList } from './UseList';

export type ListItemProps = {
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
  /**
   * Only for ordererd lists.
   * Specifies the start value of a list item.
   * The following list items will increment from that number
   */
  value?: number;
};

export const ListItem = ({
  className,
  listItemProps,
  children,
  value,
}: ListItemProps) => {
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
