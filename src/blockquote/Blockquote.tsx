import React from 'react';
import { classNames } from '../common/utils';

type Props = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the blockquotes
   */
  text: string | number;
  /**
   * Child components can also used for Blockquote content
   */
  children: string | number | JSX.Element;
  /**
   * footer of the blockquotes
   */
  footer?: string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLQuoteElement>;
};

type BlockquoteText = Omit<Props, 'children'>;
type BlockquoteChildren = Omit<Props, 'text'>;
type BlockquoteProps = BlockquoteText | BlockquoteChildren;

const isTextType = (p: any): p is BlockquoteText => !!p.text;
const isChildrenType = (p: any): p is BlockquoteChildren => !!p.children;

export const Blockquote = ({
  className,
  footer,
  props,
  ...rest
}: BlockquoteProps) => {
  const dynamicClassName = classNames(['dcx-blockquote', className]);

  let content!: string | number | JSX.Element;

  if (isChildrenType(rest)) content = rest.children;
  if (isTextType(rest)) content = rest.text;

  return (
    <blockquote className={dynamicClassName} {...props}>
      {content}
      <footer>{footer}</footer>
    </blockquote>
  );
};
