import React from 'react';
import {
  useValidationOnChange,
  Roles,
  Label,
  Hint,
  classNames,
  isEmpty,
} from '../common';
import { HintProps } from '../common/components/commonTypes';

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
  value?: any;
  /**
   * input label
   */
  label?: string;
  /**
   * pass the validation rules(please refer to forgJS) and the message you want to display
   **/
  validation?: { rule: any; message: string } | any;
  /**
   * input class name
   */
  inputClassName?: string;
  /**
   * input container class name
   */
  containerClassName?: string;
  /**
   * allow to style the container in case of error
   */
  containerClassNameError?: string;
  /**
   * input label class name
   */
  labelClassName?: string;
  /**
   * allow to customise the error message with all the properites needed
   **/
  errorProps?: any;
  /**
   * allow to customise the input with all the properites needed
   **/
  inputDivProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
  /**
   * allow to customise the input with all the properites needed
   **/
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> & {
    ref?: React.RefObject<HTMLInputElement>;
  };
  /**
   * allow to customise the label with all the properites needed
   */
  //labelProps?: React.HTMLAttributes<HTMLLabelElement> & { htmlFor?: string };
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
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
   * function that will trigger when the input receives focus
   **/
  onFocus?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * function that will trigger when the input loses focus
   **/
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * function that will check if is vald or not based on the validation rules
   **/
  isValid?: (valid: boolean, errorMessageVisible?: boolean) => void;
  /**
   * error message
   **/
  errorMessage?: any;
  /**
   * allow to specify an error message coming from another source
   */
  staticErrorMessage?: string;
  /**
   * error position - top or bottom
   **/
  errorPosition?: ErrorPosition;
  /**
   * define a string that labels the current element.
   **/
  ariaLabel?: string;
  /**
   * allows input to have aria-required
   */
  ariaRequired?: boolean;
  /**
   * you can trigger to display an error without interact with the component
   */
  displayError?: boolean;
  /**
   * allow to define an hint
   */
  hint?: HintProps;
  /**
   * Specifies if that field needs to be filled or not
   */
  required?: boolean;
  /**
   * tab index value
   */
  tabIndex?: number;
  /**
   * if a variant floating is specified it will add a class 'dcx-floating-label' for supporting a floating label feature
   */
  variant?: 'floating' | 'floating-filled' | 'normal';
};

const floatVariants = ['floating', 'floating-filled'];

export enum ErrorPosition {
  BEFORE_LABEL = 'before-label',
  BOTTOM = 'bottom',
  AFTER_LABEL = 'after-label',
  AFTER_HINT = 'after-hint',
}

export const FormInput = ({
  name,
  type,
  value,
  label,
  validation = null,
  inputProps,
  labelProps,
  errorProps,
  prefix,
  suffix,
  onChange,
  onFocus,
  onBlur,
  isValid,
  errorMessage,
  staticErrorMessage,
  errorPosition,
  ariaLabel,
  ariaRequired,
  displayError = false,
  inputClassName,
  containerClassName,
  containerClassNameError,
  labelClassName,
  required,
  hint,
  variant = 'normal',
  inputDivProps = { style: { display: 'flex' } },
  tabIndex = 0,
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

  const handleFocus = (event: React.FormEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FormEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event);
  };

  const isStaticMessageValid = (): boolean =>
    typeof staticErrorMessage === 'string' && !isEmpty(staticErrorMessage);

  const ErrorMessage = () => (
    <div
      {...{
        ...errorProps,
        className: classNames(['dcx-error-message', errorProps?.className]),
      }}
    >
      {isStaticMessageValid() ? (
        <div role={Roles.alert} {...errorMessage}>
          {staticErrorMessage}
        </div>
      ) : validity && !validity.valid && showError ? (
        <div role={Roles.alert} {...errorMessage}>
          {validity.message}
        </div>
      ) : null}
    </div>
  );

  const isStaticOrDynamicError = (): boolean =>
    isStaticMessageValid() || (validity && !validity.valid) || false;

  const inputEl: JSX.Element = (
    <input
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      required={required}
      className={inputClassName}
      aria-label={ariaLabel}
      aria-required={ariaRequired}
      tabIndex={tabIndex}
      {...inputProps}
    />
  );

  const labelEl: JSX.Element = (
    <Label
      label={label}
      labelProperties={labelProps}
      htmlFor={inputProps?.id}
      className={labelClassName}
    />
  );

  const containerClasses = classNames([
    'dcx-form-input',
    containerClassName,
    {
      'dcx-form-input--filled': !!value,
      'dcx-form-input--placeholder': !!inputProps?.placeholder,
      'dcx-error-bottom': errorPosition === ErrorPosition.BOTTOM,
      'dcx-hint-bottom': hint && hint.position !== 'above',
      'dcx-floating-label': floatVariants.includes(variant),
      'dcx-floating-label-filled': variant === 'floating-filled',
      [`dcx-form-input--error ${containerClassNameError}`]:
        isStaticOrDynamicError(),
    },
  ]);

  return (
    <div className={containerClasses}>
      {errorPosition && errorPosition === ErrorPosition.BEFORE_LABEL && (
        <ErrorMessage />
      )}
      {!floatVariants.includes(variant) && labelEl}
      {errorPosition && errorPosition === ErrorPosition.AFTER_LABEL && (
        <ErrorMessage />
      )}
      {hint && hint.position === 'above' && <Hint {...hint} />}
      {errorPosition && errorPosition === ErrorPosition.AFTER_HINT && (
        <ErrorMessage />
      )}
      {prefix || suffix ? (
        <div {...inputDivProps}>
          {prefix && !isEmpty(prefix) && (
            <div
              {...{
                ...prefix.properties,
                className: classNames([
                  'dcx-form-input__prefix',
                  prefix.properties.className,
                ]),
              }}
            >
              {prefix.content}
            </div>
          )}
          {floatVariants.includes(variant) ? (
            <div className="dcx-wrapper-label">
              {labelEl}
              {inputEl}
            </div>
          ) : (
            inputEl
          )}
          {suffix && !isEmpty(suffix) && (
            <div
              {...{
                ...suffix.properties,
                className: classNames([
                  'dcx-form-input__suffix',
                  suffix.properties.className,
                ]),
              }}
            >
              {suffix.content}
            </div>
          )}
        </div>
      ) : floatVariants.includes(variant) ? (
        <div className="dcx-wrapper-label">
          {labelEl}
          {inputEl}
        </div>
      ) : (
        inputEl
      )}
      {hint && hint.position !== 'above' && <Hint {...hint} />}
      {errorPosition && errorPosition === ErrorPosition.BOTTOM && (
        <ErrorMessage />
      )}
    </div>
  );
};
