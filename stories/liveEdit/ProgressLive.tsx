import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Progress } from '../../src/progress/Progress';

const ProgressDemo = `
function ProgressDemo() {
  return (
    <Progress
      label="Progress"
      max={100}
      value={80}
      className=""
      labelClassName=""
      id="progress"
      tabIndex={0}
    />
  );
}
`.trim();

const ProgressLive = () => {
  const scope = { Progress };
  return (
    <LiveProvider code={ProgressDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ProgressLive;
