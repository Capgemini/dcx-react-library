import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { PreformattedText } from '../../src/preformattedText/PreformattedText';

const PreformattedTextDemo = `
function PreformattedTextDemo() {

  return (
    <PreformattedText class="" value="Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks."
props={{}}/>
  )
}
`.trim();

const PreformattedTextLive = () => {
  const scope = { PreformattedText };
  return (
    <LiveProvider code={PreformattedTextDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default PreformattedTextLive;
