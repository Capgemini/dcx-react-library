import React from 'react';
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
   * multi upload whether or not to allow directories and files both to be selected in the file list
   */
  allowDirectories?: string;
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
  inputProperties?: any;
  /**
   * multi upload label
   */
  label?: string;
  /**
   * multi upload label properties for customisation
   */
  labelProperties?: any;
};

export const MultiUpload = ({
  name,
  acceptedFormats,
  allowDirectories,
  className,
  error,
  hint,
  id,
  inputProperties,
  label,
  labelProperties,
}: MultiUploadProps) => (
  <div className={className}>
    <label {...labelProperties} aria-controls={id} htmlFor={id}>
      {label && <span>{label}</span>}
      {hint && <Hint {...hint} />}
      {error && <ErrorMessage {...error} />}
      <input
        {...inputProperties}
        id={id}
        type="file"
        name={name}
        accept={acceptedFormats}
        allowdirs={allowDirectories}
      />
    </label>
  </div>
);
