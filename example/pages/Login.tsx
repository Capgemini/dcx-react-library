import * as React from 'react';
import { FormInput, Button } from 'dcx-react-library';
import { Label } from '../generated-components/Label';
import { HeadingOne } from '../generated-components/HeadingOne';
import { capitalize } from 'lodash';
import { usernameValidation, passwordValidation } from './validationRules';
import './login.scss';

export const Login = () => {
  const initialState = {
    username: '',
    password: '',
    isLoading: false,
    isFormValid: false,
    validation: {
      usernameValid: false,
      passwordValid: false,
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'updateUsername':
        return {
          ...state,
          username: action.value,
        };
      case 'updatePassword':
        return {
          ...state,
          password: action.value,
        };
      case 'setIsLoading':
        return {
          ...state,
          isLoading: action.value,
        };
      case 'setIsFormValid':
        return {
          ...state,
          isFormValid: action.value,
        };
      case 'setUsernameValid':
        return {
          ...state,
          validation: {
            ...state.validation,
            usernameValid: action.value,
          },
        };
      case 'setPasswordValid':
        return {
          ...state,
          validation: {
            ...state.validation,
            passwordValid: action.value,
          },
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    dispatch({ type: `update${capitalize(name)}`, value });
  };

  const handleUserNameValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: 'setUsernameValid', value: valid });
    setUsernameErrorState(isErrorMessageVisible);
    checkFormValidity({
      username: valid,
      password: state.validation.passwordValid,
    });
  };

  const handlePasswordValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: 'setPasswordValid', value: valid });
    setPasswordErrorState(isErrorMessageVisible);
    checkFormValidity({
      username: state.password.usernameValid,
      password: valid,
    });
  };

  const onSubmit = () => {
    // send data / set loading
    dispatch({ type: 'setIsLoading', value: true });
    if (state.isFormValid) {
      // it's valid
    }
    setTimeout(() => dispatch({ type: 'setIsLoading', value: false }), 1000);
  };

  const checkFormValidity = formValidObj => {
    const { username, password } = formValidObj;
    dispatch({ type: 'setIsFormValid', value: username && password });
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
            value={state.username}
            onChange={handleInputChange}
            isValid={handleUserNameValidity}
            inputProps={{
              placeholder: 'Enter your username',
              autoComplete: 'username',
              className: 'form-control',
            }}
            errorProps={{
              className: 'help-block',
            }}
            validation={usernameValidation}
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
            value={state.password}
            onChange={handleInputChange}
            isValid={handlePasswordValidity}
            inputProps={{
              placeholder: 'Enter your password',
              autoComplete: 'current-password',
              className: 'form-control',
            }}
            errorProps={{
              className: 'help-block',
            }}
            validation={passwordValidation}
            errorPosition="bottom"
          />
        </div>

        <Button
          label="Login"
          onClick={onSubmit}
          isLoading={state.isLoading}
          disabled={!state.isFormValid}
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
