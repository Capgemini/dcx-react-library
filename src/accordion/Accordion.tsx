import React, { useEffect, useState } from 'react';
import AccordionContext from './AccordionContext';
import { AccordionItemProps } from './AccordionItem';
import { classNames } from '../common';

interface AccordionProps {
  /**
   * Allows multiple sections of the accordion to be open at the same time
   */
  multipleOpen?: boolean;

  /**
   * Specifies which sections of the accordion should be expanded by default
   */
  expanded?: string[];

  /**
   * Customizes the icons displayed when the accordion sections are expanded
   */
  expandIcon?: JSX.Element;

  /**
   * Customizes the icons displayed when the accordion sections are collapsed
   */
  collapsedIcon?: JSX.Element;

  /**
   * Displays the individual sections of the accordion
   */
  children:
    | React.ReactElement<AccordionItemProps>
    | React.ReactElement<AccordionItemProps>[];

  /**
   * Applies custom CSS classes to the title of the accordion sections
   */
  titleClassName?: string;

  /**
   * Applies custom CSS classes to the details of the accordion sections
   */
  detailsClassName?: string;
  /**
   * Applies custom CSS classes to the Accordion
   */
  className?: string;
  /**
   * Allows for defining custom properties
   */
  props?: any;
}

export const Accordion = ({
  multipleOpen = false,
  expanded = [],
  children,
  expandIcon,
  collapsedIcon,
  titleClassName,
  detailsClassName,
  className,
  ...props
}: AccordionProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(
    expanded.length > 1 && !multipleOpen
      ? [expanded[0]]
      : (expanded as string[])
  );

  useEffect(() => {
    setExpandedItems(
      expanded.length > 1 && !multipleOpen
        ? [expanded[0]]
        : (expanded as string[])
    );
  }, [expanded, multipleOpen]);

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
      <div className={classNames(['dcx-accordion', className])} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
