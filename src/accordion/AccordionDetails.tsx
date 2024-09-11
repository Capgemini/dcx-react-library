import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';
import AccordionItemContext from './AccordionItemContext';
import { classNames } from '../common';

export interface AccordionDetailsProps {
  /**
   * will allow to specify the className
   */
  className?: string;
  /**
   * will allow to pass whatever element you prefer
   */
  children: JSX.Element;
  /**
   * you can define your own properties
   */
  props?: any;
}

export const AccordionDetails = ({
  className,
  children,
  ...props
}: AccordionDetailsProps) => {
  const { expanded, detailsClassName } = useContext(AccordionContext);
  const { title } = useContext(AccordionItemContext);
  const detailsClasses = classNames([
    className,
    detailsClassName,
    'dcx-accordion-details',
  ]);

  const isExpanded = expanded.includes(title);

  return (
    <div
      className={detailsClasses}
      style={{
        display: 'grid',
        gridTemplateRows: isExpanded ? '1fr' : '0fr',
        ...(!isExpanded && { paddingTop: '0', paddingBottom: '0' }),
      }}
      aria-expanded={isExpanded}
      {...props}
    >
      <div style={{ overflow: 'hidden' }}>{children}</div>
    </div>
  );
};
