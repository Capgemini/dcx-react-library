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
      <h1>Accordion with single open - default</h1>
      <Accordion>
        <AccordionItem title="1">
          <AccordionTitle className="accordion">
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle className="accordion">
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>

      <h1>Accordion with multiple open - multipleOpen</h1>
      <Accordion multipleOpen>
        <AccordionItem title="1">
          <AccordionTitle className="accordion">
            <>Title 1</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>Panel 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle className="accordion">
            <>Title 2</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>Panel 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>

      <h1>
        Accordion with the second accordion item expanded by defaul - expanded
      </h1>
      <Accordion expanded={['2']}>
        <AccordionItem title="1">
          <AccordionTitle className="accordion">
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle className="accordion">
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    </>
  );
};
