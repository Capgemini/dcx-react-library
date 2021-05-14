import * as React from 'react';
import { MultiUpload } from 'dcx-react-library';

export const MultiUploadDemo = () => {
  const onChangeHandler: (file: File | null) => void = (file: File) => {
    if (file) {
      const date = new Date(file.lastModified).toLocaleDateString('en-us');
      alert(`${file.name} was uploaded, it was last modified at ${date}`);
    }
  };

  return (
    <MultiUpload
      name="form-input"
      acceptedFormats=".docx"
      hint={{
        text: 'please upload file here',
      }}
      label="CV"
      onChange={onChangeHandler}
    />
  );
};
