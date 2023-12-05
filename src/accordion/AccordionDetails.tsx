import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';
import AccordionItemContext from './AccordionItemContext';

export interface AccordionDetailsProps {
  /**
   * will allow to specify the className
   */
  className?: string;
  /**
   * will allow to pass whaterver element you prefer
   */
  children: JSX.Element;
}

export const AccordionDetails = ({
  className,
  children,
}: AccordionDetailsProps) => {
  const { expanded } = useContext(AccordionContext);
  const { title } = useContext(AccordionItemContext);

  return (
    <div
      className={className}
      style={{ display: expanded.includes(title) ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
};
