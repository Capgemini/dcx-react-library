import React from 'react';
import { useValidationOnChange, Roles } from '../common';
import { ErrorPosition, FormInputProps } from '../common/components';

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
    <div role={Roles.formInput}>
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
      {errorPosition && errorPosition === ErrorPosition.BOTTOM && (
        <ErrorMessage />
      )}
    </div>
  );
};
