import React from 'react';

interface AccordionContextProps {
  /**
   * Allows multiple sections of the accordion to be open at the same time
   */
  multipleOpen: boolean;

  /**
   * Specifies which sections of the accordion should be expanded by default
   */
  expanded: string[];

  /**
   * Handles click events, taking the title of the accordion section as a parameter
   */
  onClick: (title: string) => void;

  /**
   * Customizes the icons displayed when the accordion sections are collapsed
   */
  collapsedIcon?: JSX.Element;

  /**
   * Customizes the icons displayed when the accordion sections are expanded
   */
  expandIcon?: JSX.Element;

  /**
   * Applies custom CSS classes to the title of the accordion sections
   */
  titleClassName?: string;

  /**
   * Applies custom CSS classes to the details of the accordion sections
   */
  detailsClassName?: string;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  multipleOpen: false,
  expanded: [],
  onClick: () => {},
  collapsedIcon: undefined,
  expandIcon: undefined,
  titleClassName: undefined,
  detailsClassName: undefined,
});

export default AccordionContext;
