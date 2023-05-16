import React from 'react';
import { classNames } from '../common';

type LinkProps = {
  /**
   * A property to define a target URL
   */
  to: string;
  /**
   * A CSS class for styling label
   */
  className?: string;
  /**
   * define the value of the link
   */
  value: string;
  /**
   * Additional props/attributes
   */
  props?: React.HtmlHTMLAttributes<HTMLAnchorElement>;
};
export const Link = ({ className, to, props, value }: LinkProps) => (
  <a href={to} className={classNames(['dcx-link', className])} {...props}>
    {value}
  </a>
);
