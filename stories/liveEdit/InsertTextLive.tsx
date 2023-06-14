import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { InsertText } from '../../src/insertText/InsertText';

const InsertTextDemo = `
function InsertTextDemo() {

  return (
    <InsertText value="insert text" id="user-defined-id" props={{}} className="" />
  )
}
`.trim();

const InsertTextLive = () => {
  const scope = { InsertText };
  return (
    <LiveProvider code={InsertTextDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default InsertTextLive;
