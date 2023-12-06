import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';
import { classNames } from '../common';

export interface AccordionTitleProps {
  /**
   * will allow to specify a generic content
   */
  children: JSX.Element;
  /**
   * will allow to pass a class to style the title
   */
  className?: string;
  /**
   * you can define your own properties
   */
  props?: any;
}

export const AccordionTitle = ({
  className,
  children,
  props,
}: AccordionTitleProps) => {
  const { titleClassName, expandIcon } = useContext(AccordionContext);
  const titleClasses = classNames([className, titleClassName]);
  return (
    <div className={titleClasses} {...props}>
      {children}
      {expandIcon}
    </div>
  );
};
