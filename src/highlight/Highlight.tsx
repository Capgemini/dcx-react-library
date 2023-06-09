import React from 'react';
import { classNames } from '../common/utils';

type HighlightProps = {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the highlight
   */
  children: JSX.Element | string;
  /**
   * Additional props/attributes
   */
  props?: React.HTMLAttributes<HTMLElement>;
};

export const Highlight = ({ className, children, props }: HighlightProps) => {
  const dynamicClassName = classNames(['dcx-highlight', className]);

  return (
    <mark className={dynamicClassName} {...props}>
      {children}
    </mark>
  );
};
