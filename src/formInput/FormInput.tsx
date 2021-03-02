import React from 'react'
import {useValidationOnChange} from '../common'
interface FormInputProps {
  name: string;
  type: string;
  value: any;
  validation: {
    rule: any;
    message: string;
  }
  inputProps?: any;
  errorProps?: any;
  prefix?: any;
  suffix?: any;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  isValid: (valid: boolean) => void;
  errorMessage?: any;
  errorPosition?: position;
  ariaLabel?: string; 
}

export enum position {
  TOP = 'top',
  BOTTOM = 'bottom'
}


export const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  value,
  validation,
  inputProps,
  errorProps,
  prefix,
  suffix,
  onChange,
  isValid,
  errorMessage,
  errorPosition,
  ariaLabel
}) => {
  const {validity, onValueChange} = useValidationOnChange(validation);

  React.useEffect(() => {
    isValid(validity.valid)
  }, [validity.valid])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onValueChange(event);
    onChange(event);
  }

  const ErrorMessage = () => (
    <div
        style={{
          fontSize: '10px',
          color: 'red',
          fontWeight: 'bold',
        }}
        {...errorProps}
      >
        {!validity.valid ? (
          <div data-testid="form-input-error" {...errorMessage}>{validity.message}</div>
        ) : null}
      </div>
  )

  return (
    <div style={{width: '97%', marginBottom: '15px'}} data-testid="form-input">
      {errorPosition && errorPosition === position.TOP && <ErrorMessage/>}
      <div style={{display: 'flex'}}>
        {prefix && <div data-testid="form-input-prefix">{prefix}</div>}
        <input
          data-testid="form-input-input"
          style={{width: '100%'}}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          {...inputProps}
          aria-label={ariaLabel || name}
        />
        {suffix && <div data-testid="form-input-suffix">{suffix}</div>}
      </div>
      {errorPosition && errorPosition === position.BOTTOM && <ErrorMessage/>}
    </div>
  )
}
