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
   * allow to display expanding icon of the accordion at the root level instead of every element of the accordion
   */
  expandIcon?: JSX.Element;
  /**
   * allow to display collapsing icon of the accordion at the root level instead of every element of the accordion
   */
  collapsedIcon?: JSX.Element;
  /**
   * allow to display the title of the accordion
   */
  children:
    | React.ReactElement<AccordionItemProps>
    | React.ReactElement<AccordionItemProps>[];
  /**
   * instead of styling separately every single title in the accordion you can perform it once at the root level
   */
  titleClassName?: string;
  /**
   * instead of styling separately every single details in the accordion you can perform it once at the root level
   */
  detailsClassName?: string;
}

export const Accordion = ({
  multipleOpen = false,
  expanded = [],
  children,
  expandIcon,
  collapsedIcon,
  titleClassName,
  detailsClassName,
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    expanded.length > 1 && !multipleOpen ? [expanded[0]] : expanded as string[]
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
        collapsedIcon: collapsedIcon,
        titleClassName: titleClassName,
        detailsClassName: detailsClassName,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
