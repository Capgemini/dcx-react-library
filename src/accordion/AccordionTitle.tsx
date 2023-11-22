import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

export interface AccordionTitleProps {
  title: string;
  titleClassName?: string;
  expandIcon?: React.ReactNode;
}

export const AccordionTitle = ({ titleClassName = '', title, expandIcon }: AccordionTitleProps) => {
  const { onClick } = useContext(AccordionContext);

  const handleClick = () => {
    onClick && onClick(title);
  };

  return (
    <div className={titleClassName} onClick={handleClick}>
      {title}
      {expandIcon}
    </div>
  );
};