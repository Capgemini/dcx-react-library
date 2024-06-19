import React from 'react';
import { AccordionTitleProps } from './AccordionTitle';
import { AccordionDetailsProps } from './AccordionDetails';
import AccordionItemContext from './AccordionItemContext';

export interface AccordionItemProps {
  /**
   * The title of the accordion item
   */
  title: string;

  /**
   * The children of the accordion item, which should be an array containing an AccordionTitle and AccordionDetails element
   */
  children: [
    React.ReactElement<AccordionTitleProps>,
    React.ReactElement<AccordionDetailsProps>
  ];

  /**
   * Allows for defining custom properties
   */
  props?: any;
}

export const AccordionItem = ({
  title,
  children,
  ...props
}: AccordionItemProps) => {
  return (
    <AccordionItemContext.Provider value={{ title }}>
      <div title={title} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};
