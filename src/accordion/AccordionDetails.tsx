import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

interface AccordionDetailsProps {
  detailsClassName?: any;
  details: string;
}

const AccordionDetails = ({ detailsClassName, details }: AccordionDetailsProps) => {
  const { expanded } = useContext(AccordionContext);

  return (
    <div className={detailsClassName} style={{ display: expanded ? 'block' : 'none' }}>
      {details}
    </div>
  );
};

export default AccordionDetails;