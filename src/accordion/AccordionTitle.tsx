import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

export interface AccordionTitleProps {
  id: string;
  children: JSX.Element;
  className?: string;
  expandIcon?: React.ReactNode;
}

export const AccordionTitle = ({ id, className = '', children, expandIcon }: AccordionTitleProps) => {
  const { onClick } = useContext(AccordionContext);

  const handleClick = () => {
    onClick && onClick(id);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
      {expandIcon}
    </div>
  );
};