import * as React from 'react';
import { FormInput, ErrorPosition } from '@capgeminiuk/dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

export const FormInputDemo = () => {
  //Im using the same one for the 3 demos
  const [value, setValue] = React.useState('');
  //@ts-ignore
  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  //Im using this set only for the valid one
  const [valueValid, setValueValid] = React.useState('');
  const [showValid, setShowValid] = React.useState(true);
  //@ts-ignore
  const handleChangeValid = (event) => setValueValid(event.currentTarget.value);
  //@ts-ignore
  const handleValidity = (valid) => setShowValid(valid);

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
        hiddenErrorText=""
      />
      <h1>Label</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
        label="this is a label"
        labelProps={{
          htmlFor: 'input-id',
        }}
        hiddenErrorText=""
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
        prefix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        hiddenErrorText=""
      />
      <h1>Prefix Label</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
          id: 'input-id',
        }}
        label="this is a label"
        labelProps={{
          htmlFor: 'input-id',
        }}
        prefix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        hiddenErrorText=""
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
        suffix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        hiddenErrorText=""
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
        prefix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        suffix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        hiddenErrorText=""
      />
      <h1>Prefix and suffix with label</h1>
      <FormInput
        name="password"
        type="text"
        value={value}
        onChange={handleChange}
        inputProps={{
          placeholder: 'enter your email',
        }}
        prefix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        suffix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        label="this is a label"
        labelProps={{
          htmlFor: 'input-id',
        }}
        hiddenErrorText=""
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
        errorPosition={ErrorPosition.BOTTOM}
        prefix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        suffix={{
          properties: {
            style: {
              border: '1px solid #d2d2d2',
              padding: '5px',
            },
          },
          content: <FontAwesomeIcon icon={faAt} />,
        }}
        hiddenErrorText=""
      />
      <div>isValid:{showValid.toString()}</div>
    </>
  );
};
