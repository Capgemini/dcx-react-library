import React from 'react';

interface AccordionContextProps {
  multipleOpen: boolean;
  expanded: string[];
  onClick: (title: string) => void;
  collapsedIcon?: JSX.Element;
  expandIcon?: JSX.Element;
  titleClassName?: string;
  detailsClassName?: string;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  multipleOpen: false,
  expanded: [],
  onClick: () => {},
  collapsedIcon: undefined,
  expandIcon: undefined,
  titleClassName: undefined,
  detailsClassName: undefined,
});

export default AccordionContext;
