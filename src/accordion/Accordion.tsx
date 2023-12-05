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
  expanded?: string[];
  /**
   * allow to display expanding/collapsing icon of the accordion
   */
  expandIcon?: React.ReactNode;
  /**
   * allow to display the title of the accordion
   */
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
}

export const Accordion = ({ multipleOpen = false, expanded = [], children }: AccordionProps) => {
  let expandedItems: string[] = expanded;
  // only one item can be open at a time if multipleOpen is false and multiple items are expanded by default
  if (expanded.length > 1 && !multipleOpen) {
    expandedItems = [expanded[0]];
  }
  const [activeTitles, setActiveTitles] = useState<string[]>(expandedItems);

  const handleClick = (id: string) => {
    if (multipleOpen) {
      setActiveTitles(activeTitles.includes(id) ? activeTitles.filter(t => t !== id) : [...activeTitles, id]);
    } else {
      setActiveTitles(activeTitles.includes(id) ? [] : [id]);
    }
  };

  return (
    <AccordionContext.Provider value={{ expanded: activeTitles, onClick: handleClick, multipleOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};