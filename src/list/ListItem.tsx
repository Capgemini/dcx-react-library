import React from 'react';
import { classNames } from '../common';

import { useList } from './UseList';

export type ListItemProps = {
  /**
   * allow to specify a custom content
   */
  children: JSX.Element | string;
  /**
   * A CSS class for styling list
   */
  className?: string;
  /**
   * allow to specify Additional props/attributes
   */
  listItemProps?: React.HTMLProps<HTMLLIElement>;
  /**
   * Specifies the start value of a list item.
   * The following list items will increment from that number
   * Only for ordererd lists.
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
