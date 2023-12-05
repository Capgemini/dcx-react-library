import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

export interface AccordionDetailsProps {
  id: string;
  className?: string;
  children: JSX.Element;
}

export const AccordionDetails = ({ id, className, children }: AccordionDetailsProps) => {
  const { expanded } = useContext(AccordionContext);

  return (
    <div className={className} style={{ display: expanded.includes(id) ? 'block' : 'none' }}>
      {children}
    </div>
  );
};