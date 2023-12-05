import React, { useContext } from 'react';
import { AccordionTitleProps } from './AccordionTitle';
import { AccordionDetailsProps } from './AccordionDetails';
import AccordionContext from './AccordionContext';
import AccordionItemContext from './AccordionItemContext';

export interface AccordionItemProps {
  title: string;
  children: [
    React.ReactElement<AccordionTitleProps>,
    React.ReactElement<AccordionDetailsProps>
  ];
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const { onClick } = useContext(AccordionContext);
  const [selected, setSelected] = React.useState(title);

  const handleClick = () => {
    setSelected(title);
    onClick && onClick(title);
  };
  return (
    <AccordionItemContext.Provider value={{ title: selected }}>
      <div title={title} onClick={handleClick}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};
