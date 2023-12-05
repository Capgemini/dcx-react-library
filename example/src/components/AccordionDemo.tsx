import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionDetails,
} from '@capgeminiuk/dcx-react-library';
import './accordion.css';

export const AccordionDemo = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionTitle id='1' className="accordion">
          <>Section 1</>
        </AccordionTitle>
        <AccordionDetails id='1' className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionDetails>
      </AccordionItem>
      <AccordionItem>
        <AccordionTitle id='2' className="accordion">
          <>Section 2</>
        </AccordionTitle>
        <AccordionDetails id='2' className="panel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </AccordionDetails>
      </AccordionItem>
    </Accordion>
  );
};
