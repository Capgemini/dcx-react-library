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
  value?: string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLPreElement>;
  /**
   * An optional id for the preformatted text element
   */
  id?: string;
  /**
   * An optional title for the preformatted text element
   */
  title?: string;
};

export const PreformattedText = ({
  className,
  value,
  props,
  id,
  title,
}: preformattedTextProps) => (
  <pre
    className={classNames(['dcx-pre', className])}
    id={id}
    title={title}
    {...props}
  >
    {value}
  </pre>
);
