import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

export interface AccordionDetailsProps {
  detailsClassName?: string;
  details: string;
}

export const AccordionDetails = ({ detailsClassName, details }: AccordionDetailsProps) => {
  const { expanded } = useContext(AccordionContext);

  return (
    <div className={detailsClassName} style={{ display: expanded ? 'block' : 'none' }}>
      {details}
    </div>
  );
};