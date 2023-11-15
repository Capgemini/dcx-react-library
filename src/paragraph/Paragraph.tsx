import React from 'react';
import { classNames } from '../common/utils';

type Props = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the paragraph. it has precedence to children
   */
  value: string | number;
  /**
   * allow to specify a custom content
   */
  children: string | number | JSX.Element;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLParagraphElement>;
};

type ParagraphValue = Omit<Props, 'children'>;
type ParagraphChildren = Omit<Props, 'value'>;
type ParagraphProps = ParagraphValue | ParagraphChildren;

const isValueType = (p: any): p is ParagraphValue => !!p.value;
const isChildrenType = (p: any): p is ParagraphChildren => !!p.children;

export const Paragraph = ({
  className,
  props,
  ...rest
}: ParagraphProps): JSX.Element => {
  const dynamicClassName = classNames(['dcx-paragraph', className]);
  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isValueType(rest)) content = rest.value;

  return (
    <p className={dynamicClassName} {...props}>
      {content}
    </p>
  );
};
