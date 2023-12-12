import React, { useContext } from 'react';
import { AccordionTitleProps } from './AccordionTitle';
import { AccordionDetailsProps } from './AccordionDetails';
import AccordionContext from './AccordionContext';
import AccordionItemContext from './AccordionItemContext';

export interface AccordionItemProps {
  /**
   * The title of the accordion item
   */
  title: string;

  /**
   * The children of the accordion item, which should be an array containing an AccordionTitle and AccordionDetails element
   */
  children: [
    React.ReactElement<AccordionTitleProps>,
    React.ReactElement<AccordionDetailsProps>
  ];

  /**
   * Allows for defining custom properties
   */
  props?: any;
}

export const AccordionItem = ({
  title,
  children,
  ...props
}: AccordionItemProps) => {
  const { onClick } = useContext(AccordionContext);
  const [selected, setSelected] = React.useState(title);

  const handleClick = () => {
    setSelected(title);
    onClick && onClick(title);
  };
  return (
    <AccordionItemContext.Provider value={{ title: selected }}>
      <div title={title} onClick={handleClick} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};
