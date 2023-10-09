import React, { useState } from 'react';

type AccordionProps = {
  /**
   * allow to specify a class for the container
   */
  containerClassName?: string;
  /**
   * allow to display the title of the accordion
   */
  title: React.ReactNode;
  /**
   * allow to display expanding/collapsing icon of the accordion
   */
  expandIcon: React.ReactNode;
  /**
   * allow to specify a class for the title of the accordion
   */
  titleClassName?: string;
  /**
   * allow to specify a class for the details/content of the accordion
   */
  detailsClassName?: string;
  /**
   * allow to display the details/content of the accordion
   */
  details: React.ReactNode;
  /**
   * Additional props/attributes
   */
  props?: any;
}

export const Accordion = ({
  containerClassName,
  title,
  expandIcon,
  titleClassName,
  detailsClassName,
  details,
  props
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${containerClassName || ''}`} {...props}>
      <div
        className={`${titleClassName || ''}`}
        onClick={toggleAccordion}
      >
        {title}
        {expandIcon}
      </div>
      {isExpanded && (
        <div className={`${detailsClassName || ''}`}>{details}</div>
      )}
    </div>
  );
};

export default Accordion;
