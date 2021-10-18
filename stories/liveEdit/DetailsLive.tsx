import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Details } from '../../src/details/Details';

const DetailsDemo = `
  function DetailsDemo() {
    return (
      <Details
        details="some details"
        summary="headline summary"
      />
    )
  }
`.trim();

const DetailsLive = () => {
  const scope = { Details };
  return (
    <LiveProvider code={DetailsDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default DetailsLive;