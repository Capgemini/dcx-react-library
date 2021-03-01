import React from 'react';
import {FormInput} from '../../.';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAt} from '@fortawesome/free-solid-svg-icons';
const FormInputDemo = () => {
  const [value, setValue] = React.useState('')
  const handleChange = event => {
    setValue(event.currentTarget.value)
  }
  const handleValidity = valid => {
    console.log(valid)
  }
  return (
    <FormInput
      name="password"
      type="text"
      value={value}
      onChange={handleChange}
      isValid={handleValidity}
      inputProps={{
        placeholder: 'enter your email',
      }}
      errorProps={{
        style: {fontSize: '10px', color: 'red', fontWeight: 'bold'},
      }}
      validation={{
        rule: {
          type: 'password',
          minLength: 8,
          uppercase: 1,
          numbers: 1,
          matchesOneOf: ['@', '_', '-', '.', '!'],
        },
        message:
          'your password need to be min 8 chars 1 Uppercase, 1 Number and one special character',
      }}
      suffix={
        <div
          style={{
            border: '1px solid #d2d2d2',
            padding: '5px',
          }}
        >
          <FontAwesomeIcon icon={faAt} />
        </div>
      }
    />
  )
}

export default FormInputDemo
