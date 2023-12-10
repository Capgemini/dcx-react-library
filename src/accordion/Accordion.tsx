import React, { useState } from 'react';
import AccordionContext from './AccordionContext';
import { AccordionItemProps } from './AccordionItem';

interface AccordionProps {
  /**
   * allows multiple sections of the accordion to be open at the same time
   */
  multipleOpen?: boolean;
  /**
   * allow to specifies which sections of the accordion should be expanded by default
   */
  expanded?: string[];
  /**
   * allow to customize the icons displayed when the accordion sections are expanded
   */
  expandIcon?: JSX.Element;
  /**
   * allow to customize the icons displayed when the accordion sections are collapsed
   */
  collapsedIcon?: JSX.Element;
  /**
   * allow to display the individual sections of the accordion
   */
  children:
    | React.ReactElement<AccordionItemProps>
    | React.ReactElement<AccordionItemProps>[];
  /**
   * allow to apply custom CSS classes to the title of the accordion sections
   */
  titleClassName?: string;
  /**
   * allow to apply custom CSS classes to the details of the accordion sections
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
