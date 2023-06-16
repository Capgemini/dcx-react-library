import React from 'react';
import { classNames } from '../common';

type preformattedTextProps = {
  /**
   * A CSS class for styling the preformatted text
   */
  className?: string;
  /**
   * The value of the preformatted text
   */
  value: string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLPreElement>;
};

export const PreformattedText = ({
  className,
  value,
  props,
}: preformattedTextProps) => (
  <pre className={classNames(['dcx-pre', className])} {...props}>
    {value}
  </pre>
);
