import React, { useState } from 'react';
import AccordionContext from './AccordionContext';
import { AccordionItemProps } from './AccordionItem';


interface AccordionProps {
  /**
   * allow to specify multiple sections to be expanded at the same time
   */
  multipleOpen?: boolean;
  /**
   * allow to specify the default expanded section
   */
  expanded?: string;
  /**
   * allow to display expanding/collapsing icon of the accordion
   */
  expandIcon?: React.ReactNode;
  /**
   * allow to display the title of the accordion
   */
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}

export const Accordion = ({   multipleOpen = false, expanded = '', children }: AccordionProps) => {
  const [activeTitle, setActiveTitle] = useState(expanded);

  const handleClick = (title: string) => {
    setActiveTitle(multipleOpen ? title : activeTitle === title ? '' : title);
  };

  return (
    <AccordionContext.Provider value={{ expanded: activeTitle, onClick: handleClick, multipleOpen }}>
      {Array.isArray(children)
        ? children.map((child, index) => React.cloneElement(child, { key: index }))
        : React.cloneElement(children, { key: 'single-child' })}
    </AccordionContext.Provider>
  );
};