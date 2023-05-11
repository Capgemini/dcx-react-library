import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Label } from '../../src/label/Label';

const LabelDemo = `
function LabelDemo() {

  return (
    <Label
      className="additional classes" value="text" id="user-defined-id"
    />
  )
}
`.trim();

const LabelLive = () => {
  const scope = { Label };
  return (
    <LiveProvider code={LabelDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default LabelLive;
