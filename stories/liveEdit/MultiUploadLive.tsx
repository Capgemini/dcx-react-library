import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { MultiUpload } from '../../src/multiUpload/MultiUpload';
import './style.css';

const MultiUploadDemo = `
function MultiUploadDemo() {
  return (
    <MultiUpload
      name="file-upload-hint"
      acceptedFormats=".jpg, .png"
      allowDirectories=""
      ariaLabel=""
      className=""
      error={{
        text: "",
        classes: "",
        id: "",
        visuallyHiddenText: {
          text: "",
          classes: "",
        }
      }}
      id="multi"
      inputProperties={{}}
      labelProperties={{}}
      label="Upload File"
      hint={{
        text: 'This can be in either JPG or PNG format',
        classes: 'classes for hint',
        id: 'hint-id',
      }}
    />
  );
}
`.trim();

const MultiUploadLive = () => {
  const scope = { MultiUpload };
  return (
    <LiveProvider code={MultiUploadDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default MultiUploadLive;
