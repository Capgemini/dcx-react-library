import React from 'react';
import { Accordion } from 'dcx-react-library';

export const AccordionDemo = () => (
  <>
    <h1>Accordion</h1>
    <h2>Single accordion</h2>
    <Accordion
      heading="Section 1"
      content="Some content"
      headingStyle={{
        backgroundColor: '#c0c0c0',
        color: 'white',
        cursor: 'pointer',
        padding: '18px',
        outline: 'none',
        fontSize: '15px',
      }}
      contentStyle={{
        padding: '18px',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    />

    <h2>Set of accordions</h2>
    <Accordion
      heading="Section 1"
      content="Some content"
      headingStyle={{
        backgroundColor: '#c0c0c0',
        color: 'white',
        cursor: 'pointer',
        padding: '18px',
        outline: 'none',
        fontSize: '15px',
      }}
      contentStyle={{
        padding: '18px',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    />
    <Accordion
      heading="Section 2"
      content="Some more content"
      headingStyle={{
        backgroundColor: '#c0c0c0',
        color: 'white',
        cursor: 'pointer',
        padding: '18px',
        outline: 'none',
        fontSize: '15px',
      }}
      contentStyle={{
        padding: '18px',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    />
    <Accordion
      heading="Section 3"
      content="Even more content"
      headingStyle={{
        backgroundColor: '#c0c0c0',
        color: 'white',
        cursor: 'pointer',
        padding: '18px',
        outline: 'none',
        fontSize: '15px',
      }}
      contentStyle={{
        padding: '18px',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    />
  </>
);
