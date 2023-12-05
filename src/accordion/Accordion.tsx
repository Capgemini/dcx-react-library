import React, { useState } from 'react';
import AccordionContext from './AccordionContext';
import { AccordionItemProps } from './AccordionItem';

interface AccordionProps {
  /**
   * allow to expand multiple at the same time
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
  children:
    | React.ReactElement<AccordionItemProps>
    | React.ReactElement<AccordionItemProps>[];
}

export const Accordion = ({
  multipleOpen = false,
  expanded = [],
  children,
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    expanded.length > 1 && !multipleOpen ? [expanded[0]] : expanded
  );

  const handleClick = (title: string) => {
    if (multipleOpen) {
      setExpandedItems(
        expandedItems.includes(title)
          ? expandedItems.filter((t) => t !== title)
          : [...expandedItems, title]
      );
    } else {
      setExpandedItems(expandedItems.includes(title) ? [] : [title]);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        expanded: expandedItems,
        onClick: handleClick,
        multipleOpen,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
