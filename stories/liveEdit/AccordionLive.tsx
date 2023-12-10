import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Accordion, AccordionDetails, AccordionItem, AccordionTitle } from '../../src/accordion';

const AccordionDemo = `
function AccordionDemo() {
  const accordion = {
    backgroundColor: '#eee',
    color: '#444',
    cursor: 'pointer',
    padding: '18px',
    width: '100%',
    border: 'none',
    textAlign: 'left',
    outline: 'none',
    fontSize: '15px',
    transition: '0.4s'
  }

  const panel = {
    padding: '18px',
    display: 'none',
    backgroundColor: 'white',
    overflow: 'hidden',
    margin: '0px'
  }

  return (<Accordion
    expanded={['1']}
    titleClassName="accordion"
    detailsClassName="panel"
    expandIcon={<span>&#x25B2;</span>}
    collapsedIcon={<span>&#x25BC;</span>}
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
  </Accordion>)
}
`;

const AccordionLive = () => {
  const scope = { Accordion, AccordionDetails, AccordionItem, AccordionTitle };
  return (
    <LiveProvider code={AccordionDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default AccordionLive;
