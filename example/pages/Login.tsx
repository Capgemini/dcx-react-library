import * as React from 'react';
import { FormInput, Button } from 'dcx-react-library';
import { Label } from '../generated-components/Label';
import { HeadingOne } from '../generated-components/HeadingOne';

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleChange = event => {
    const targetName = event.currentTarget.name;
    if (targetName === 'username') {
      setUsername(event.currentTarget.value);
    } else {
      setPassword(event.currentTarget.value);
    }
  };

  const [usernameValid, setUsernameValid] = React.useState('');
  const [passwordValid, setPasswordValid] = React.useState('');
  const handleUserNameValidity = valid => setUsernameValid(valid);
  const handlePasswordValidity = valid => setPasswordValid(valid);

  const [isLoading, setIsLoading] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);
  const buttonHandler = () => {
    setIsLoading(true);
    if (usernameValid && passwordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <div class="login-container">
        <HeadingOne>Log In</HeadingOne>
        <form>
          <Label for="username">Username</Label>
          <FormInput
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            isValid={handleUserNameValidity}
            inputProps={{
              placeholder: 'Enter your username',
              autoComplete: 'username',
            }}
            errorProps={{
              className: 'error',
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

          <Label for="password">Password</Label>
          <FormInput
            name="password"
            type="text"
            value={password}
            onChange={handleChange}
            isValid={handlePasswordValidity}
            inputProps={{
              placeholder: 'Enter your password',
              autoComplete: 'current-password',
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

          <Button
            label="Login"
            onClick={buttonHandler}
            isLoading={isLoading}
            loadingLabel="loading..."
            customLoadingPreImage={<span>spinner</span>}
          />
        </form>
        {formValid.toString()}
      </div>
    </>
  );
};
