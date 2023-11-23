import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionDetails,
} from '@capgeminiuk/dcx-react-library';

export const AccordionDemo = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionTitle title="test" />
        <AccordionDetails details="test2"></AccordionDetails>
      </AccordionItem>
      <AccordionItem>
        <AccordionTitle title="test3" />
        <AccordionDetails details="test4"></AccordionDetails>
      </AccordionItem>
    </Accordion>
  );
};
