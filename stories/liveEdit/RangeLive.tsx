import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Range } from '../../src/range/Range';

const RangeDemo = `
function RangeDemo() {
  return (
    <Range
      ariaLabel="Progress"
      min={0}
      max={100}
      value={80}
      inputClass=""
      showTooltip={true}
      prefix={
                   <div
                       style={{
                           border: '1px solid #d2d2d2',
                           padding: '5px',
                       }}
                   >
                       <h1>Low</h1>
                   </div>
               }
               suffix={
                   <div
                       style={{
                           border: '1px solid #d2d2d2',
                           padding: '5px',
                       }}
                   >
                       <h1>High</h1>
                   </div>

               }
      tabIndex={0}
    />
  );
}
`.trim();

const RangeLive = () => {
  const scope = { Range };
  return (
    <LiveProvider code={RangeDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default RangeLive;
