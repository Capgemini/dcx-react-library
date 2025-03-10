import React from 'react';
import { classNames } from '../common';

type Props = {
  /**
   * A property to define a target URL
   */
  to: string;
  /**
   * A CSS class for styling link
   */
  className?: string;
  /**
   * define the value of the link
   */
  value: string;
  /**
   * Child components can also used for Label content
   */
  children: string | number | JSX.Element;
  /**
   * Additional props/attributes
   */
  props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};

type LinkValue = Omit<Props, 'children'>;
type LinkChildren = Omit<Props, 'value'>;
type LinkProps = LinkValue | LinkChildren;

const isValueType = (p: any): p is LinkValue => !!p.value;
const isChildrenType = (p: any): p is LinkChildren => !!p.children;

export const Link = ({ className, to, props, ...rest }: LinkProps) => {
  let content!: string | number | JSX.Element;

  if (isValueType(rest)) content = rest.value;
  if (isChildrenType(rest)) content = rest.children;

  return (
    <a href={to} className={classNames(['dcx-link', className])} {...props}>
      {content}
    </a>
  );
};
