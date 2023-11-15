import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionDetails from './AccordionDetails';

interface AccordionItemProps {
  title: string;
  details: string;
  titleClassName: string;
  detailsClassName: string;
  disable?: boolean;
  expandIcon?: React.ReactNode;
  accordionProps?: any;
}

const AccordionItem = ({ title, details, accordionProps, detailsClassName, titleClassName, expandIcon }: AccordionItemProps) => (
    <div {...accordionProps}>
      <AccordionTitle title={title} titleClassName={titleClassName} expandIcon={expandIcon}/>
      <AccordionDetails details={details} detailsClassName={detailsClassName} />
    </div>
  );

export default AccordionItem;