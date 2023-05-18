import React from 'react';
import { classNames } from '../common';

type list = {
  type: 'unordered' | 'ordered';
  className?: string;
  itemClassName?: string;
  listProps?:
    | React.HTMLAttributes<HTMLOListElement>
    | React.HTMLAttributes<HTMLUListElement>;
};

type listItem = {
  value?: string;
  listItemProps?: React.HTMLProps<HTMLLIElement>;
  className?: string;
};

export const List = ({ type, className, listProps, itemClassName }: list) =>
  type === 'unordered' ? (
    <ul className={classNames(['dcx-list', className])} {...listProps}>
      <ListItem value="list text" className={itemClassName} />
    </ul>
  ) : (
    <ol className={classNames(['dcx-list', className])} {...listProps}>
      <ListItem value="list text" className={itemClassName} />
    </ol>
  );

export const ListItem = ({ value, listItemProps, className }: listItem) => (
  <li className={classNames(['dcx-list-item', className])} {...listItemProps}>
    {value}
  </li>
);
