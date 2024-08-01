import React, { useContext } from 'react';
import { AccordionTitleProps } from './AccordionTitle';
import { AccordionDetailsProps } from './AccordionDetails';
import AccordionItemContext from './AccordionItemContext';
import { classNames } from '../common';
import AccordionContext from './AccordionContext';

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
    React.ReactElement<AccordionDetailsProps>,
  ];
  /**
   * will allow to pass a class to style the title
   */
  className?: string;
  /**
   * Allows for defining custom properties
   */
  props?: any;
}

export const AccordionItem = ({
  title,
  children,
  className,
  ...props
}: AccordionItemProps) => {
  const { expanded } = useContext(AccordionContext);
  const itemClasses = classNames([
    className,
    'dcx-accordion-item',
    { 'dcx-accordion-item--expanded': expanded.includes(title) },
  ]);
  return (
    <AccordionItemContext.Provider value={{ title }}>
      <div title={title} className={itemClasses} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};
