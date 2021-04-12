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
  isValid?: (valid: boolean, errorMessageVisible?: boolean) => void;
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
  /**
   * it will allow you to do not display the error message on load
   */
  displayErrorOnLoad?: boolean;
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
  displayErrorOnLoad = false,
}: FormInputProps) => {
  const { validity, onValueChange } = useValidationOnChange(validation, value);
  const [showErrorOnLoad, setShowErrorOnLoad] = React.useState<boolean>(
    displayErrorOnLoad
  );
  React.useEffect(() => {
    if (isValid && validity)
      isValid(validity.valid, showErrorOnLoad && !validity.valid);
  }, [validity?.valid, showErrorOnLoad]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setShowErrorOnLoad(true);
    if (onValueChange) onValueChange(event);
    onChange(event);
  };

  const ErrorMessage = () => (
    <div {...errorProps}>
      {validity && !validity.valid && showErrorOnLoad ? (
        <div role={Roles.error} {...errorMessage}>
          {validity.message}
        </div>
      ) : null}
    </div>
  );

  return (
    <div>
      {errorPosition && errorPosition === ErrorPosition.TOP && <ErrorMessage />}
      <div style={{ display: 'flex' }}>
        {prefix && <div>{prefix}</div>}
        <input
          style={{ width: '100%' }}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          {...inputProps}
          aria-label={ariaLabel || name}
        />
        {suffix && <div>{suffix}</div>}
      </div>
      {errorPosition && errorPosition === ErrorPosition.BOTTOM && (
        <ErrorMessage />
      )}
    </div>
  );
};
