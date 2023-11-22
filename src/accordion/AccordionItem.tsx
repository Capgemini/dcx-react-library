import React from 'react';
import { AccordionTitleProps } from './AccordionTitle';
import { AccordionDetailsProps } from './AccordionDetails';

export interface AccordionItemProps {
  children: [React.ReactElement<AccordionTitleProps>, React.ReactElement<AccordionDetailsProps>];
}

export const AccordionItem = ({ children }: AccordionItemProps) => (
  <div>
    {React.Children.map(children, (child: React.ReactElement<AccordionTitleProps | AccordionDetailsProps>, index: number) => 
      React.cloneElement(child, { key: index })
    )}
  </div>
);