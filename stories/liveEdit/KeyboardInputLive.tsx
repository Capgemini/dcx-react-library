import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { KeyboardInput } from '../../src/keyBoard/KeyboardInput';

const KeyboardInputDemo = `
function KeyboardInputDemo() {

  return (
    <KeyboardInput id="user-defined-id" props={{}} className="">ctrl + p</KeyboardInput>
  )
}
`.trim();

const KeyboardInputLive = () => {
  const scope = { KeyboardInput };
  return (
    <LiveProvider code={KeyboardInputDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default KeyboardInputLive;
