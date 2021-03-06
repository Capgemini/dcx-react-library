import * as React from 'react';
import { FormInput } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
export const FormInputDemo = () => {
  //Im using the same one for the 3 demos
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  //Im using this set only for the valid one
  const [valueValid, setValueValid] = React.useState('');
  const [showValid, setShowValid] = React.useState(true);
  const handleChangeValid = event => setValueValid(event.currentTarget.value);
  const handleValidity = valid => setShowValid(valid);

  return (
    <>
      <h1>Basic</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
      />
      <h1>Prefix</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
        prefix={
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
      <h1>Suffix</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
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
      <h1>Prefix and suffix</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
        prefix={
          <div
            style={{
              border: '1px solid #d2d2d2',
              padding: '5px',
            }}
          >
            <FontAwesomeIcon icon={faAt} />
          </div>
        }
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
      <h1>Validation</h1>
      <FormInput
        name="password"
        type="text"
        value={valueValid}
        onChange={handleChangeValid}
        isValid={handleValidity}
        inputProps={{
          placeholder: 'enter your password',
        }}
        errorProps={{
          style: { fontSize: '10px', color: 'red', fontWeight: 'bold' },
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
        errorPosition="bottom"
        prefix={
          <div
            style={{
              border: '1px solid #d2d2d2',
              padding: '5px',
            }}
          >
            <FontAwesomeIcon icon={faAt} />
          </div>
        }
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
      <div>isValid:{showValid.toString()}</div>
    </>
  );
};
