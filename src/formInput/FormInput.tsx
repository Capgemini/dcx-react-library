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
}) => {
  const {validity, onValueChange} = useValidationOnChange(validation);

  React.useEffect(() => {
    isValid(validity.valid)
  }, [validity.valid])

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onValueChange(event);
    onChange(event);
  }

  return (
    <div style={{width: '97%', marginBottom: '15px'}} data-testid="form-input">
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
        />
        {suffix && <div data-testid="form-input-suffix">{suffix}</div>}
      </div>
      <div
        style={{
          fontSize: '10px',
          color: 'red',
          fontWeight: 'bold',
        }}
        {...errorProps}
      >
        {!validity.valid ? (
          <div data-testid="form-input-error">{validity.message}</div>
        ) : null}
      </div>
    </div>
  )
}
