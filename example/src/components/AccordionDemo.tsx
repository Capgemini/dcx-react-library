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

      <h1>Accordion with common title classes - titleClassName</h1>
      <Accordion expanded={['2']} titleClassName="accordion">
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails className="panel">
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>

      <h1>
        Accordion with common title and details classes - titleClassName &
        detailsClassName
      </h1>
      <Accordion
        expanded={['2']}
        titleClassName="accordion"
        detailsClassName="panel"
      >
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails>
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>

      <h1>Accordion with common expand icon - expandIcon</h1>
      <Accordion
        expanded={['2']}
        titleClassName="accordion"
        detailsClassName="panel"
        expandIcon={<span>&#94;</span>}
      >
        <AccordionItem title="1">
          <AccordionTitle>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails>
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>

      <h1>Accordion with extra props</h1>
      <Accordion
        expanded={['2']}
        titleClassName="accordion"
        detailsClassName="panel"
        expandIcon={<span>&#94;</span>}
      >
        <AccordionItem title="1" props={{ testId: 1 }}>
          <AccordionTitle props={{ testId: 2 }}>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails props={{ testId: 3 }}>
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>

      <h1>Accordion with expanding and collapsing icons</h1>
      <Accordion
        expanded={['1']}
        titleClassName="accordion"
        detailsClassName="panel"
        expandIcon={<span>&#x25B2;</span>}
        collapsedIcon={<span>&#x25BC;</span>}
      >
        <AccordionItem title="1">
          <AccordionTitle props={{ testId: 2 }}>
            <>Section 1</>
          </AccordionTitle>
          <AccordionDetails props={{ testId: 3 }}>
            <p>Section 1 Details</p>
          </AccordionDetails>
        </AccordionItem>
        <AccordionItem title="2">
          <AccordionTitle>
            <>Section 2</>
          </AccordionTitle>
          <AccordionDetails>
            <p>Section 2 Details</p>
          </AccordionDetails>
        </AccordionItem>
      </Accordion>
    </>
  );
};
