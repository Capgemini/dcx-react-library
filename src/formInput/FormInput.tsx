import React from 'react';
import { useValidationOnChange, Roles } from '../common';

type FormInputProps = {
  /**
   * input name
   **/
  name: string;
  /**
   * input type
   **/
  type: string;
  /**
   * input value
   **/
  value: any;
  /**
   * pass the validation rules(please refer to forgJS) and the message you want to display
   **/
  validation?: { rule: any; message: string } | any;
  /**
   * allow to customise the input with all the properites needed
   **/
  inputProps?: any;
  /**
   * allow to customise the error message with all the properites needed
   **/
  errorProps?: any;
  /**
   * generic parameter to pass whatever element before the input
   **/
  prefix?: any;
  /**
   * generic parameter to pass whatever element after the input
   **/
  suffix?: any;
  /**
   * function that will trigger all the time there's a change in the input
   **/
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * function that will check if is vald or not based on the validation rules
   **/
  isValid?: (valid: boolean) => void;
  /**
   * error message
   **/
  errorMessage?: any;
  /**
   * error position - top or bottom
   **/
  errorPosition?: ErrorPosition;
  /**
   * input ariaLabel
   **/
  ariaLabel?: string;
};

export enum ErrorPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export const FormInput = ({
  name,
  type,
  value,
  validation = null,
  inputProps,
  errorProps,
  prefix,
  suffix,
  onChange,
  isValid,
  errorMessage,
  errorPosition,
  ariaLabel,
}: FormInputProps) => {
  const { validity, onValueChange } = useValidationOnChange(validation);

  React.useEffect(() => {
    if (isValid && validity) isValid(validity.valid);
  }, [validity?.valid]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (onValueChange) onValueChange(event);
    onChange(event);
  };

  const ErrorMessage = () => (
    <div
      style={{
        fontSize: '10px',
        color: 'red',
        fontWeight: 'bold',
      }}
      {...errorProps}
    >
      {validity && !validity.valid ? (
        <div role={Roles.error} {...errorMessage}>
          {validity.message}
        </div>
      ) : null}
    </div>
  );

  return (
    <div style={{ width: '97%', marginBottom: '15px' }} role={Roles.formInput}>
      {errorPosition && errorPosition === ErrorPosition.TOP && <ErrorMessage />}
      <div style={{ display: 'flex' }}>
        {prefix && <div role={Roles.prefix}>{prefix}</div>}
        <input
          style={{ width: '100%' }}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          {...inputProps}
          aria-label={ariaLabel || name}
        />
        {suffix && <div role={Roles.suffix}>{suffix}</div>}
      </div>
      {errorPosition && errorPosition === ErrorPosition.BOTTOM && <ErrorMessage />}
    </div>
  );
};
