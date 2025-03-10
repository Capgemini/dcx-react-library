import React from 'react';
import { classNames } from '../common/utils';

type Props = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * define the value of the label
   */
  value: string;
  /**
   * content of the highlight
   */
  children: JSX.Element | string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

type HighlightValue = Omit<Props, 'children'>;
type HighlightChildren = Omit<Props, 'value'>;
type HighlightProps = HighlightValue | HighlightChildren;

const isValueType = (p: any): p is HighlightValue => !!p.value;
const isChildrenType = (p: any): p is HighlightChildren => !!p.children;

export const Highlight = ({ className, props, ...rest }: HighlightProps) => {
  const dynamicClassName = classNames(['dcx-highlight', className]);

  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  return (
    <mark className={dynamicClassName} {...props}>
      {content}
    </mark>
  );
};
