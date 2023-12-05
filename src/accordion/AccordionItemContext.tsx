import React from 'react';

interface AccordionItemContextProps {
  /**
   * define the title of each item. It will allow to understand wich item we want to toggle
   */
  title: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextProps>({
  title: '',
});

export default AccordionItemContext;
