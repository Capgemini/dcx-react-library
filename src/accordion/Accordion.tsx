import React, { useState } from 'react';
import AccordionContext from './AccordionContext';
import AccordionItem from './AccordionItem';


interface AccordionProps {
  /**
   * allow to specify a class for the title of the accordion
   */
  titleClassName?: string;
  /**
   * allow to specify a class for the details/content of the accordion
   */
  detailsClassName?: string;
  multipleOpen?: boolean;
  expanded?: string;
  /**
   * allow to display expanding/collapsing icon of the accordion
   */
  expandIcon?: React.ReactNode;
  /**
   * allow to display the title of the accordion
   */
  title: string;
  /**
   * allow to display the details/content of the accordion
   */
  details: string;
  /**
   * Additional props/attributes
   */
  accordionProps?: any;
}

export const Accordion = ({ title, details, titleClassName = '', detailsClassName = '', multipleOpen = false, expandIcon, expanded = '', ...accordionProps }: AccordionProps) => {
  const [activeTitle, setActiveTitle] = useState(expanded);

  const handleClick = (title: string) => {
    setActiveTitle(multipleOpen ? title : activeTitle === title ? '' : title);
  };

  return (
    <AccordionContext.Provider value={{ multipleOpen, expanded: activeTitle, onClick: handleClick }}>
      <AccordionItem title={title} details={details} detailsClassName={detailsClassName} titleClassName={titleClassName} accordionProps={accordionProps} expandIcon={expandIcon} />
    </AccordionContext.Provider>
  );
};