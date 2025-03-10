import React from 'react';
import { classNames } from '../common';

type Props = {
  /**
   * A CSS class for styling the preformatted text
   */
  className?: string;
  /**
   * The value of the preformatted text
   */
  value: string;
  /**
   * Child components can also used for Label content
   */
  children: string | JSX.Element;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLPreElement>;
};

type PreFormattedTextValue = Omit<Props, 'children'>;
type PreFormattedTextChildren = Omit<Props, 'value'>;
type preformattedTextProps = PreFormattedTextValue | PreFormattedTextChildren;

const isValueType = (p: any): p is PreFormattedTextValue => !!p.value;
const isChildrenType = (p: any): p is PreFormattedTextChildren => !!p.children;

export const PreformattedText = ({
  className,
  props,
  ...rest
}: preformattedTextProps) => {
  let content!: string | number | JSX.Element;

  if (isValueType(rest)) content = rest.value;
  if (isChildrenType(rest)) content = rest.children;

  return (
    <pre className={classNames(['dcx-pre', className])} {...props}>
      {content}
    </pre>
  );
};
