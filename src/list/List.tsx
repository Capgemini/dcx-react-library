import React from 'react';
import { classNames } from '../common';

export type list = {
  /**
   * Type property to specify ordered or unordered lists
   */
  type: 'unordered' | 'ordered';
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
   * define the value of the link
   */
  value?: string;
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

export const List = ({ type, className, listProps, itemClassName }: list) => {
  const Element: ElementType = type === 'unordered' ? 'ul' : 'ol';

  return (
    <Element className={classNames(['dcx-list', className])} {...listProps}>
      <ListItem value="list text" className={itemClassName} />
    </Element>
  );
};

export const ListItem = ({ value, listItemProps, className }: listItem) => (
  <li className={classNames(['dcx-list-item', className])} {...listItemProps}>
    {value}
  </li>
);
