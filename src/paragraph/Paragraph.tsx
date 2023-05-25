import React from 'react';
import { classNames } from '../common/utils';

type ParagraphProps = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the paragraph
   */
  value: string | number;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLParagraphElement>;
};

export const Paragraph = ({ className, value, props }: ParagraphProps) => {
  const dynamicClassName = classNames(['dcx-paragraph', className]);
  
  return (
    <p className={dynamicClassName} {...props}>
      {value}
    </p>
  );
};
