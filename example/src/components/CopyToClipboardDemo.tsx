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
        <label htmlFor="input-tag">Input</label>
        <input
          id="input-tag"
          value={value}
          ref={inputRef}
          onChange={(evt) => setValue(evt.currentTarget.value)}
        />
        <div>
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={inputRef}
            onCopy={(value) => {
              alert(value);
            }}
          />
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={inputRef}
            onCopy={(value) => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
        <label htmlFor="forminput-tag">FormInput</label>
        <textarea
          id="forminput-tag"
          value={valueArea}
          ref={textAreaRef}
          onChange={(evt) => setValueArea(evt.currentTarget.value)}
        />
        <div>
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={textAreaRef}
            onCopy={(value) => {
              alert(value);
            }}
          />
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={textAreaRef}
            onCopy={(value) => {
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
            aria-label="Copy to Clipboard"
            ref={linkRef}
            onCopy={(value) => {
              alert(value);
            }}
          />
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={linkRef}
            onCopy={(value) => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
        <h2>Text</h2>
        <div ref={divRef}>this is the text</div>
        <div>
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={divRef}
            onCopy={(value) => {
              alert(value);
            }}
          />
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            ref={divRef}
            onCopy={(value) => {
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
            aria-label="Copy to Clipboard"
            text="http://www.google.com"
            onCopy={(value) => {
              alert(value);
            }}
          />
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            text="http://www.google.com"
            onCopy={(value) => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
        <h2>Text</h2>
        <div>this is the text</div>
        <div>
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            text="this is the text"
            onCopy={(value) => {
              alert(value);
            }}
          />
          <CopyToClipboard
            aria-label="Copy to Clipboard"
            text="this is the text"
            onCopy={(value) => {
              alert(value);
            }}
            icon={<FontAwesomeIcon icon={faCopy} />}
          />
        </div>
      </div>
    </>
  );
};
