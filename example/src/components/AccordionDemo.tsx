import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionDetails,
} from '@capgeminiuk/dcx-react-library';
import './accordion.scss';

export const AccordionDemo = () => {
  return (
    <>
      <h1>Accordion with multiple open false</h1>
      <Accordion>
        <AccordionItem>
          <AccordionTitle id="1" className="accordion">
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails id="1" className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="2" className="accordion">
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails id="2" className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
      <h1>Accordion with multiple open true</h1>
      <Accordion multipleOpen>
        <AccordionItem>
          <AccordionTitle id="1" className="accordion">
            <>Title 1</>
          </AccordionTitle>
          <AccordionDetails id="1" className="panel">
            <p>Panel 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="2" className="accordion">
            <>Title 2</>
          </AccordionTitle>
          <AccordionDetails id="2" className="panel">
            <p>Panel 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
      <h1>Accordion with the second accordion item expanded by default</h1>
      <Accordion expanded={['2']}>
        <AccordionItem>
          <AccordionTitle id="1" className="accordion">
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails id="1" className="panel">
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle id="2" className="accordion">
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails id="2" className="panel">
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    </>
  );
};
