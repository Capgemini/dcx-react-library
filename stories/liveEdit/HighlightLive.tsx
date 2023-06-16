import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Highlight } from '../../src/highlight/Highlight';

const HighlightDemo = `
function HighlightDemo() {
    const style = {
    color:'red'
    }
    return (
    <Highlight 
        className="highlight"
        props={{ id: 'my-highlight', style }}>
    This is the content of the highlighted text.
    </Highlight> 
    )
}
`.trim();

const HighlightLive = () => {
  const scope = { Highlight };
  return (
    <LiveProvider code={HighlightDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default HighlightLive;
