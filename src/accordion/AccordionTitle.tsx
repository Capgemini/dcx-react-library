import React from 'react';

export interface AccordionTitleProps {
  /**
   *
   */
  children: JSX.Element;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  expandIcon?: React.ReactNode;
}

export const AccordionTitle = ({
  className = '',
  children,
  expandIcon,
}: AccordionTitleProps) => (
  <div className={className}>
    {children}
    {expandIcon}
  </div>
);
