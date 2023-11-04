import React from 'react';
import { classNames } from '../common/utils';

type ParagraphProps = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the paragraph. it has precedence to children
   */
  value?: string | number;
  /**
   * allow to specify a custom content
   */
  children?: string | number | JSX.Element;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLParagraphElement>;
};

export const Paragraph = ({
  className,
  value,
  props,
  children,
}: ParagraphProps): JSX.Element => {
  const dynamicClassName = classNames(['dcx-paragraph', className]);
  let content: typeof value | typeof children;
  if (children) content = children;
  if (value) content = value;

  return (
    <p className={dynamicClassName} {...props}>
      {content}
    </p>
  );
};
