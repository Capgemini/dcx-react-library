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
   * will allow to pass whaterver element you prefer
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

  const detailsClasses = classNames([className, detailsClassName]);

  return (
    <div
      className={detailsClasses}
      style={{ display: expanded.includes(title) ? 'block' : 'none' }}
      {...props}
    >
      {children}
    </div>
  );
};
