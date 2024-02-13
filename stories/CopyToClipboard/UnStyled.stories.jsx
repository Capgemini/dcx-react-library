import { CopyToClipboard } from '../../src/copyToClipboard/CopyToClipboard';
import React, {useState, useRef} from 'react';
export default {
  title: 'DCXLibrary/Utils/CopyToClipboard/Without style',
  component: CopyToClipboard,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  render: function() {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    return (
      <>
       <input
          value={value}
          ref={inputRef}
          onChange={evt => setValue(evt.currentTarget.value)}
        />
        <CopyToClipboard
            ref={inputRef}
            onCopy={value => {
              alert(value);
            }}
        />
      </>
    );
  },
  args: {
    
  },
};