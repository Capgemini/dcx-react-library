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
   * allow to display expanding/collapsing icon of the accordion at the root level instead of every element of the accordion
   */
  expandIcon?: JSX.Element;
  /**
   * allow to display the title of the accordion
   */
  children:
    | React.ReactElement<AccordionItemProps>
    | React.ReactElement<AccordionItemProps>[];
  /**
   * instad of styling separately every single title in the accordion you can perform it once at the root level
   */
  titleClassName?: string;
  /**
   * instad of styling separately every single details in the accordion you can perform it once at the root level
   */
  detailsClassName?: string;
}

export const Accordion = ({
  multipleOpen = false,
  expanded = [],
  children,
  expandIcon,
  titleClassName,
  detailsClassName,
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
        expandIcon: expandIcon,
        titleClassName: titleClassName,
        detailsClassName: detailsClassName,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
