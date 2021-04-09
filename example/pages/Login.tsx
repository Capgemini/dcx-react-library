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

    if (usernameValid && passwordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const [usernameValid, setUsernameValid] = React.useState('');
  const [passwordValid, setPasswordValid] = React.useState('');
  const handleUserNameValidity = valid => setUsernameValid(valid);
  const handlePasswordValidity = valid => setPasswordValid(valid);

  const [isLoading, setIsLoading] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const buttonHandler = () => {
    // send data / set loading
    setIsLoading(true);

    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <div className="login-container">
        <HeadingOne>Log In</HeadingOne>
        <form>
          <div className={`form-group ${!usernameValid ? 'has-error' : ''}`}>
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

          <div className={`form-group ${!passwordValid ? 'has-error' : ''}`}>
            <Label htmlFor="password" className="control-label">
              Password
            </Label>
            <FormInput
              name="password"
              type="text"
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
    </>
  );
};
