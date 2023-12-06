import React from 'react';

interface AccordionContextProps {
  multipleOpen: boolean;
  expanded: string[];
  onClick: (title: string) => void;
  expandIcon?: JSX.Element;
  titleClassName?: string;
  detailsClassName?: string;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  multipleOpen: false,
  expanded: [],
  onClick: () => {},
  expandIcon: undefined,
  titleClassName: undefined,
  detailsClassName: undefined,
});

export default AccordionContext;
