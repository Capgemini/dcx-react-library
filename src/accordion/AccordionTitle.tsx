import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';
import { classNames } from '../common';
import AccordionItemContext from './AccordionItemContext';

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
  const { expanded, titleClassName, expandIcon, collapsedIcon } = useContext(AccordionContext);
  const { title } = useContext(AccordionItemContext);
  const titleClasses = classNames([className, titleClassName]);
  const { onClick } = useContext(AccordionContext);

  const handleClick = () => {
    onClick && onClick(title);
  };
  

  return (
    <div className={titleClasses} onClick={handleClick} {...props} >
      {children}
      {expanded.includes(title) ? (expandIcon && expandIcon) : (collapsedIcon && collapsedIcon)}
    </div>
  );
};
