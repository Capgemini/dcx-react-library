import React from 'react';
import {
  ErrorMessage,
  ErrorMessageProps,
  Hint,
  HintProps,
  Roles,
} from '../common';

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
   * multi upload aria label
   */
  ariaLabel?: string;
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
  ariaLabel,
  className,
  error,
  hint,
  id,
  inputProperties,
  label,
  labelProperties,
}: MultiUploadProps) => (
  <div className={className}>
    <span role={Roles.button} aria-controls={id}>
      {label && (
        <label {...labelProperties} htmlFor={id}>
          {label}
        </label>
      )}
      {hint && <Hint {...hint} />}
      {error && <ErrorMessage {...error} />}
      <input
        {...inputProperties}
        id={id}
        type="file"
        name={name}
        aria-label={ariaLabel || name}
        accept={acceptedFormats}
        allowdirs={allowDirectories}
      />
    </span>
  </div>
);
