import React, { useEffect, useState } from 'react';
import { ErrorMessage, Hint } from '../common';
import { ErrorMessageProps, HintProps } from '../common/components/commonTypes';

type MultiUploadProps = {
  /**
   * multi upload name
   */
  name: string;
  /**
   * multi upload comma-separated list of file types accepted by the component
   */
  acceptedFormats?: string;
  /**
   * multi upload class name
   */
  className?: string;
  /**
   * multi upload error
   */
  error?: ErrorMessageProps;
  /**
   * multi upload hint
   */
  hint?: HintProps;
  /**
   * multi upload id
   */
  id?: string;
  /**
   * multi upload input properties
   */
  inputProperties?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * multi upload label
   */
  label?: string;
  /**
   * multi upload label properties for customisation
   */
  labelProperties?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * multi upload multiple
   */
  multiple?: boolean;
  /**
   * multi upload display file data once file is selected
   */
  fileData?: boolean;
  /**
   * multi upload onChangeEvent
   */
  onChange?: (file: File | null) => void;
};

export const MultiUpload = ({
  name,
  acceptedFormats,
  className,
  error,
  hint,
  id,
  inputProperties,
  label,
  labelProperties,
  multiple,
  fileData,
  onChange,
}: MultiUploadProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (selectedFile) {
      onChange && onChange(selectedFile);
    }
  }, [selectedFile]);

  const onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      setSelectedFile(files[0]);
    }
  };

  const renderFileData = () =>
    selectedFile && (
      <div>
        <p>{`File Name: ${selectedFile.name}`}</p>
        <p>{`File Type: ${selectedFile.type}`}</p>
        <p>{`Last Modified: ${new Date(
          selectedFile.lastModified
        ).toLocaleDateString('en-us')}`}</p>
      </div>
    );

  return (
    <div className={className}>
      <label {...labelProperties} aria-controls={id} htmlFor={id}>
        {label && <span>{label}</span>}
      </label>
      {hint && <Hint {...hint} />}
      {error && <ErrorMessage {...error} />}
      <input
        id={id}
        type="file"
        name={name}
        accept={acceptedFormats}
        multiple={multiple}
        onChange={onChangeHandler}
        {...inputProperties}
      />
      {fileData && renderFileData()}
    </div>
  );
};
