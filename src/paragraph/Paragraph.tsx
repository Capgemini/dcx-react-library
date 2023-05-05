import React from 'react';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  /**
   * optional CSS class name
   */
  className?: string;
  /**
   * content of the paragraph
   */
  value: string | number;
};

export const Paragraph = ({ className, value, ...props }: ParagraphProps) => (
  <p
    className={className}
    {...props}
  >
    {value}
  </p>
);
