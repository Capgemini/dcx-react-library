import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { LoadingSpinner } from '../../src/spinner/LoadingSpinner';

const LoadingSpinnerDemo = `
  function LoadingSpinnerDemo() {
    return (
      <LoadingSpinner
        color="darkgrey"
        background="lightgrey"
        speed="1s"
      >
        Loading...
      </LoadingSpinner>
    );
  }
`.trim();

const LoadingSpinnerLive = () => {
  const scope = { LoadingSpinner };
  return (
    <LiveProvider code={LoadingSpinnerDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default LoadingSpinnerLive;
