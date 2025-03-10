import React from 'react';
import { classNames } from '../common';

export type Props = {
  /**
   * specify a custom class name to be applied to the Insert-text
   */
  className?: string;

  /**
   *value specified by user
   */
  value: 'insert text';

  /**
   * Child components can also used for Label content
   */
  children: string | number | JSX.Element;

  /**
   * It will pass an id to the InsertText element
   */
  id?: string;

  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLDivElement>;
};

type InsertTextValue = Omit<Props, 'children'>;
type InsertTextChildren = Omit<Props, 'value'>;
type InsertTextProps = InsertTextValue | InsertTextChildren;

const isValueType = (p: any): p is InsertTextValue => !!p.value;
const isChildrenType = (p: any): p is InsertTextChildren => !!p.children;

export const InsertText = ({
  className,
  id,
  props,
  ...rest
}: InsertTextProps) => {
  const classes = classNames(['dcx-insert-text', className]);

  let content!: string | number | JSX.Element;

  if (isValueType(rest)) content = rest.value;
  if (isChildrenType(rest)) content = rest.children;

  return (
    <div className={classes} id={id} {...props}>
      {content}
    </div>
  );
};
