import { Story, Canvas } from '@storybook/addon-docs';
import { CopyToClipboard } from '../../src/copyToClipboard/CopyToClipboard';
import React, {useState, useRef} from 'react';

import './style.css';

/**
 * An example of 'styled' CopyToClipboard
 */
export default {
  title: 'DCXLibrary/CopyToClipboard/Class based',
  component: CopyToClipboard,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

export const WithRef = {
  name: "with reference",
  render: function() {
  	const [value, setValue] = useState('');
    const [pasted, onPaste] = useState('');
    const inputRef = useRef(null);
    return(
      <div className="copyToClipboard--container">
        <textarea
          value={value}
          ref={inputRef}
          onChange={evt => setValue(evt.currentTarget.value)}
          className="copyToClipboard--textArea"
        />
        <CopyToClipboard
          ref={inputRef}
          className="copyToClipboard"
          onCopy={onPaste}
          icon={<img src="/copy.png" alt="" width="15px" height="15px" />}
        />
        <div>
          <strong>copied:</strong>
          {pasted}
        </div>
      </div>
    )
  }
};

export const Styled = {
  name: "with some style",
  render: function() {
  	const [pasted, onPaste] = React.useState('');
    return (
      <>
        <div style={{display: 'flex'}}>
          <span className="copyToClipboard--link">www.google.com</span>
          <CopyToClipboard
          className="copyToClipboard--text"
            text="www.google.com"
            onCopy={onPaste}
            icon={<svg class="octicon octicon-clippy d-inline-block mx-1 js-clipboard-clippy-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>}
          />
        </div>
          
        <div>
          <strong>copied:</strong>
          {pasted}
        </div>
      </>
    );
  }
};