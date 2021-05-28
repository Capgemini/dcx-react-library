import React from 'react';
import { CopyToClipboard } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
export const CopyToClipboardDemo = () => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);
  return (
    <div>
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
    </div>
  );
};
