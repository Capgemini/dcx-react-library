import React from 'react';
import { isEmpty } from 'lodash';
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
   * input class name
   */
  inputClassName?: string;
  /**
   * allow to customise the error message with all the properites needed
   **/
  errorProps?: any;
  /**
   * allow to customise the input with all the properites needed
   **/
  inputProps?: React.AllHTMLAttributes<HTMLInputElement>;
  /**
   * generic parameter to pass whatever element before the input
   **/
  prefix?: {
    content?: JSX.Element | string;
    properties: React.HTMLAttributes<HTMLDivElement>;
  };
  /**
   * generic parameter to pass whatever element after the input
   **/
  suffix?: {
    content?: JSX.Element | string;
    properties: React.HTMLAttributes<HTMLDivElement>;
  };
  /**
   * function that will trigger all the time there's a change in the input
   **/
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
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
   * you can trigger to display an error without interact with the component
   */
  displayError?: boolean;
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
  displayError = false,
  inputClassName,
}: FormInputProps) => {
  const { validity, onValueChange } = useValidationOnChange(validation, value);

  const [showError, setShowError] = React.useState<boolean>(displayError);

  React.useEffect(() => {
    if (isValid && validity)
      isValid(validity.valid, showError && !validity.valid);
    // eslint-disable-next-line
  }, [validity?.valid, showError]);

  React.useEffect(() => {
    setShowError(displayError);
  }, [displayError]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setShowError(true);
    if (onValueChange) onValueChange(event);
    if (onChange) onChange(event);
  };

  const ErrorMessage = () => (
    <div {...errorProps}>
      {validity && !validity.valid && showError ? (
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
        {prefix && !isEmpty(prefix) && (
          <div {...prefix.properties}>{prefix.content}</div>
        )}
        <input
          style={{ width: '100%' }}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className={inputClassName}
          {...inputProps}
          aria-label={ariaLabel || name}
        />
        {suffix && !isEmpty(suffix) && (
          <div {...suffix.properties}>{suffix.content}</div>
        )}
      </div>
      {errorPosition && errorPosition === ErrorPosition.BOTTOM && (
        <ErrorMessage />
      )}
    </div>
  );
};
