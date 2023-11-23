import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { DescriptionList, Term, Detail } from '../../src/descriptionList'; // Update the import path

const DescriptionListDemo = `
function DescriptionListDemo() {
  return (
    <DescriptionList
        className="govuk-list"
        descListProps={{ style: { background: '#29bdc1' } }}
        detailClassName="myStyle"
        termClassName="myStyle"
        >
          <Term className="myStyle" termProps={{ style: { textDecoration: 'underline' } }}>
            Coffee
          </Term>
          <Detail className="myStyle" detailProps={{ style: { color: 'blue' } }}>
            - black hot drink
          </Detail>
          <Term>Milk</Term>
          <Detail>- white cold drink</Detail>
    </DescriptionList>
  )
}
`.trim();

const DescriptionListLive = () => {
  const scope = { DescriptionList, Term, Detail };
  return (
    <LiveProvider code={DescriptionListDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default DescriptionListLive;
