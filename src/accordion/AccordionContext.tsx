import React from 'react';

interface AccordionContextProps {
  multipleOpen: boolean;
  expanded: string[];
  onClick: (title: string) => void;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  multipleOpen: false,
  expanded: [],
  onClick: () => {},
});

export default AccordionContext;
