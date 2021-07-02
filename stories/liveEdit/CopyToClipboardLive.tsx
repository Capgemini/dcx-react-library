import React from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live';
import { CopyToClipboard } from '../../src/copyToClipboard/CopyToClipboard';

const CopyToClipboardDemo = `function() {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);
  return (
    <>
      <input
        value={value}
        ref={inputRef}
        onChange={evt => setValue(evt.currentTarget.value)}
      />
      <CopyToClipboard
        ref={inputRef}
        onCopy={alert}
        icon={<img src="" alt="" />}
      >
        <p>Copy</p>
      </CopyToClipboard>


      <div>copy me usage without ref</div>
      <CopyToClipboard
        text="copy me usage without ref"
        onCopy={alert}
        icon={<img src="" alt="" />}
      >
        <p>Copy</p>
      </CopyToClipboard>

    </>
  );
}`;

const CopyToClipboardLive = () => {
  const scope = { CopyToClipboard };
  return (
    <LiveProvider code={CopyToClipboardDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default CopyToClipboardLive;
