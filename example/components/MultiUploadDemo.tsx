import * as React from 'react';
import { MultiUpload } from 'dcx-react-library';

export const MultiUploadDemo = () => (
  <MultiUpload
    name="form-input"
    acceptedFormats=".docx"
    hint={{
      text: 'please upload file here',
    }}
    label="CV"
  />
);
