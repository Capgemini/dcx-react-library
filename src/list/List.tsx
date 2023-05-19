import React, { Children } from 'react';
import { classNames } from '../common';

export type list = {
  /**
   * details
   */
  children: JSX.Element[];
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

export const List = ({
  type = 'unordered',
  className,
  listProps,
  itemClassName,
  children,
}: list) => {
  const Element: ElementType = type === 'unordered' ? 'ul' : 'ol';
  return (
    <Element className={classNames(['dcx-list', className])} {...listProps}>
      {Children.map(children, (child) => (
        <div className={itemClassName}>{child}</div>
      ))}
    </Element>
  );
};

export const ListItem = ({
  listItemProps,
  className,
  children,
  value,
}: listItem) => (
  <li
    className={classNames(['dcx-list-item', className])}
    value={value}
    {...listItemProps}
  >
    {children}
  </li>
);

export const example = () => (
  <List>
    <ListItem value="100">item 1</ListItem>
    <ListItem value="100">item 2</ListItem>
    <ListItem value="100">item 3</ListItem>
  </List>
);
