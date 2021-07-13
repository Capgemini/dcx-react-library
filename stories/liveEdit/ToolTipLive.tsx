import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { ToolTip } from '../../src/tooltip/Tooltip';
import './style.css';

const ToolTipDemo = `
function ToolTipDemo() {
  return (
   <ToolTip
          content="Here is tooltip for bottom."
          width="250px"
          background="red"
          color="white"
          direction="bottom"
        >
          <b> Testing tooltip for bottom position </b>
        </ToolTip>
  );
}
`.trim();

const ToolTipLive = () => {
  const scope = { ToolTip };
  return (
    <LiveProvider code={ToolTipDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ToolTipLive;
