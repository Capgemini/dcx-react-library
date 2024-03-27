import { MultiUpload } from '@capgeminiuk/dcx-react-library';

export const MultiUploadDemo = () => {
  //@ts-ignore
  const onChangeHandler: (files: FileList | null) => void = (
    files: FileList
  ) => {
    if (files) {
      Array.from(files).forEach((file: File) => {
        const date = new Date(file.lastModified).toLocaleDateString('en-us');
        console.log(
          `${file.name} was uploaded, it was last modified at ${date}`
        );
      });
    }
  };

  return (
    <>
      <h1>Basic</h1>
      <label htmlFor="basic" style={{ display: 'none' }}>
        Basic Upload
      </label>
      <MultiUpload
        id="basic"
        name="form-input"
        acceptedFormats=".docx"
        hint={{
          text: 'please upload file here',
        }}
        label="CV"
        onChange={onChangeHandler}
        fileData={true}
      />
      <h1>Multi</h1>
      <label htmlFor="multi" style={{ display: 'none' }}>
        Multi Upload
      </label>
      <MultiUpload
        id="multi"
        name="form-input"
        acceptedFormats=".docx"
        hint={{
          text: 'please upload file here',
        }}
        label="Multi Upload"
        multiple
        onChange={onChangeHandler}
        fileData={true}
      />
    </>
  );
};
