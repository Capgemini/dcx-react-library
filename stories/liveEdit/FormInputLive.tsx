import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormInput } from '../../src/formInput/FormInput';

const FormInputDemo = `
function FormInputDemo() {
   
  const [value, setValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);

  const handleChange = (evt) => {
    setValue(evt.currentTarget.value);
  }

  const handleValidation = (isValid, isErrorMessageVisible) => {
    setIsValid(isValid);
    setIsErrorVisible(isErrorMessageVisible);
  }

  return (
    <FormInput
        name="password"
        type="text"
        value={value}
        label="password"
        ariaRequired = "true"
        ariaLabel = "someLabel"
        onChange={handleChange}
        isValid={handleValidation}
        displayError={false}
        inputProps={{id: "password"}}
        labelProps={{htmlFor: 'password'}}
        inputClassName=""
        containerClassName=""
        labelClassName=""
        errorProps={{}}
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
        staticErrorMessage='this is a static error message'
        errorPosition="bottom"
        prefix={{
          properties: {
            id: 'prefix',
          },
          content: 'prefix',
        }}
        suffix={{
          properties: {
            id: 'suffix',
          },
          content: 'suffix',
        }}
        tabIndex={0}
        variant="floating"
        hiddenErrorText="Error:"
        hiddenErrorTextProps={{ className: 'visually-hidden' }}
    />
  )
}
`.trim();

const FormInputLive = () => {
  const scope = { FormInput };
  return (
    <LiveProvider code={FormInputDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormInputLive;
