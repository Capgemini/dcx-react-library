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

//it will be better if we instead do like this:
{
  /* <Accordion>
<AccordionItem>
  <AccordionTitle>Title1</<AccordionTitle>
  <AccordionDetails>Content1</AccordionDetails>
</AccordionItem>
<AccordionItem>
  <AccordionTitle>Title2</AccordionTitle>
  <AccordionDetails>Content2</AccordionDetails>
</AccordionItem>
</Accordion> */
}
