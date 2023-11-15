import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

interface AccordionTitleProps {
  title: string;
  titleClassName?: string;
  expandIcon?: React.ReactNode;
}

const AccordionTitle = ({ titleClassName = '', title, expandIcon }: AccordionTitleProps) => {
  const { onClick } = useContext(AccordionContext);

  const handleClick = () => {
    onClick && onClick(title);
  };

  return (
    <div className={titleClassName} onClick={handleClick}>
      {title}
      <span>{expandIcon}</span>
    </div>
  );
};

export default AccordionTitle;