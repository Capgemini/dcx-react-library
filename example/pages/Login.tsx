import * as React from 'react';
import { FormInput, Button } from 'dcx-react-library';
import { Label } from '../generated-components/Label';
import { HeadingOne } from '../generated-components/HeadingOne';

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const [usernameValid, setUsernameValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);
  const handleUserNameValidity = (valid, isErrorMessageVisible) => {
    setUsernameValid(valid);
    setUsernameErrorState(isErrorMessageVisible);
    checkFormValidity({ username: valid, password: passwordValid });
  };
  const handlePasswordValidity = (valid, isErrorMessageVisible) => {
    setPasswordValid(valid);
    setPasswordErrorState(isErrorMessageVisible);
    checkFormValidity({ username: usernameValid, password: valid });
  };
  const [isLoading, setIsLoading] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const buttonHandler = () => {
    // send data / set loading
    setIsLoading(true);
    if (formValid) {
      // it's valid
    }
    setTimeout(() => setIsLoading(false), 1000);
  };

  const checkFormValidity = formValidObj => {
    const { username, password } = formValidObj;
    if (username && password) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const [userNameErrorState, setUsernameErrorState] = React.useState(false);
  const [passwordErrorState, setPasswordErrorState] = React.useState(false);

  return (
    <div className="login-container">
      <HeadingOne>Log In</HeadingOne>
      <form>
        <div
          className={['form-group', userNameErrorState ? 'has-error' : ''].join(
            ' '
          )}
        >
          <Label htmlFor="username" className="control-label">
            Username
          </Label>
          <FormInput
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            isValid={handleUserNameValidity}
            inputProps={{
              placeholder: 'Enter your username',
              autoComplete: 'username',
              className: 'form-control',
            }}
            errorProps={{
              className: 'help-block',
            }}
            validation={{
              rule: {
                type: 'string',
                notEmpty: true,
              },
              message: 'Please enter a username',
            }}
            errorPosition="bottom"
          />
        </div>

        <div
          className={['form-group', passwordErrorState ? 'has-error' : ''].join(
            ' '
          )}
        >
          <Label htmlFor="password" className="control-label">
            Password
          </Label>
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            isValid={handlePasswordValidity}
            inputProps={{
              placeholder: 'Enter your password',
              autoComplete: 'current-password',
              className: 'form-control',
            }}
            errorProps={{
              className: 'help-block',
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
                'Your password needs to be at least 8 chars, include 1 Uppercase, 1 Number and one special character',
            }}
            errorPosition="bottom"
          />
        </div>

        <Button
          label="Login"
          onClick={buttonHandler}
          isLoading={isLoading}
          disabled={!formValid}
          loadingLabel="loading..."
          customLoadingPreImage={<span>spinner</span>}
          className="btn btn-primary"
          type="submit"
        />
      </form>
      <div className="link-container">
        <Button
          label="Forgotten Password"
          className="btn btn-sm btn-link"
          type="button"
        />

        <Button
          label="Sign Up!"
          className="btn btn-sm btn-link"
          type="button"
        />
      </div>
    </div>
  );
};
