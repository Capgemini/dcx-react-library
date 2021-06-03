import React from 'react';
import { CopyToClipboard } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
export const CopyToClipboardDemo = () => {
  const [value, setValue] = React.useState('');
  const [valueArea, setValueArea] = React.useState('');
  const inputRef = React.useRef(null);
  const textAreaRef = React.useRef(null);
  const linkRef = React.useRef(null);
  const divRef = React.useRef(null);
  return (
    <>
      <h1 style={{ color: 'red' }}>With Ref</h1>
      <div>
        <h2>Input</h2>
        <input
          value={value}
          ref={inputRef}
          onChange={evt => setValue(evt.currentTarget.value)}
        />
        <div>
          <CopyToClipboard
            ref={inputRef}
            onCopy={value => {
              alert(value);
            }}
          />
          <CopyToClipboard
            ref={inputRef}
            onCopy={value => {
              alert(value);
            }}
          >
            Copy
          </CopyToClipboard>

          <CopyToClipboard
            ref={inputRef}
            onCopy={value => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
        <h2>FormInput</h2>
        <textarea
          value={valueArea}
          ref={textAreaRef}
          onChange={evt => setValueArea(evt.currentTarget.value)}
        />
        <div>
          <CopyToClipboard
            ref={textAreaRef}
            onCopy={value => {
              alert(value);
            }}
          />
          <CopyToClipboard
            ref={textAreaRef}
            onCopy={value => {
              alert(value);
            }}
          >
            Copy
          </CopyToClipboard>

          <CopyToClipboard
            ref={textAreaRef}
            onCopy={value => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>

        <h2>Link</h2>
        <a href="http://www.google.com" ref={linkRef}>
          http://www.google.com
        </a>
        <div>
          <CopyToClipboard
            ref={linkRef}
            onCopy={value => {
              alert(value);
            }}
          />
          <CopyToClipboard
            ref={linkRef}
            onCopy={value => {
              alert(value);
            }}
          >
            Copy
          </CopyToClipboard>

          <CopyToClipboard
            ref={linkRef}
            onCopy={value => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
        <h2>Text</h2>
        <div ref={divRef}>this is the text</div>
        <div>
          <CopyToClipboard
            ref={divRef}
            onCopy={value => {
              alert(value);
            }}
          />
          <CopyToClipboard
            ref={divRef}
            onCopy={value => {
              alert(value);
            }}
          >
            Copy
          </CopyToClipboard>

          <CopyToClipboard
            ref={divRef}
            onCopy={value => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
      </div>
      <br />
      <h1 style={{ color: 'red' }}>With Text</h1>
      <div>
        <h2>Link</h2>
        <a href="http://www.google.com">http://www.google.com</a>
        <div>
          <CopyToClipboard
            text="http://www.google.com"
            onCopy={value => {
              alert(value);
            }}
          />
          <CopyToClipboard
            text="http://www.google.com"
            onCopy={value => {
              alert(value);
            }}
          >
            Copy
          </CopyToClipboard>

          <CopyToClipboard
            text="http://www.google.com"
            onCopy={value => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
        <h2>Text</h2>
        <div>this is the text</div>
        <div>
          <CopyToClipboard
            text="this is the text"
            onCopy={value => {
              alert(value);
            }}
          />
          <CopyToClipboard
            text="this is the text"
            onCopy={value => {
              alert(value);
            }}
          >
            Copy
          </CopyToClipboard>

          <CopyToClipboard
            text="this is the text"
            onCopy={value => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
      </div>
    </>
  );
};
