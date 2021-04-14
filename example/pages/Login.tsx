import * as React from 'react';
import { FormInput, Button } from 'dcx-react-library';
import { Label, HeadingOne, Link } from '../generated-components';
import { usernameValidation, passwordValidation } from './validationRules';
import './login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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

enum LOGIN_ACTIONS {
  UPDATE_USERNAME = 'updateUsername',
  UPDATE_PASSWORD = 'updatePassword',
  SET_ISLOADING = 'setIsLoading',
  SET_ISFORM_VALID = 'setIsFormValid',
  SET_ISUSERNAME_VALID = 'setUsernameValid',
  SET_ISPASSWORD_VALID = 'setPasswordValid',
}

function reducer(state, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_USERNAME:
      return {
        ...state,
        username: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.value,
      };
    case LOGIN_ACTIONS.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.value,
      };
    case LOGIN_ACTIONS.SET_ISFORM_VALID:
      return {
        ...state,
        isFormValid: action.value,
      };
    case LOGIN_ACTIONS.SET_ISUSERNAME_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          usernameValid: action.value,
        },
      };
    case LOGIN_ACTIONS.SET_ISPASSWORD_VALID:
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

export const Login = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    dispatch({ type: LOGIN_ACTIONS[`UPDATE_${name.toUpperCase()}`], value });
  };

  const handleUserNameValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: LOGIN_ACTIONS.SET_ISUSERNAME_VALID, value: valid });
    setUsernameErrorState(isErrorMessageVisible);
    checkFormValidity({
      username: valid,
      password: state.validation.passwordValid,
    });
  };

  const handlePasswordValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: LOGIN_ACTIONS.SET_ISPASSWORD_VALID, value: valid });
    setPasswordErrorState(isErrorMessageVisible);
    checkFormValidity({
      username: state.validation.usernameValid,
      password: valid,
    });
  };

  const onSubmit = () => {
    // send data / set loading
    dispatch({ type: LOGIN_ACTIONS.SET_ISLOADING, value: true });
    if (state.isFormValid) {
      // it's valid
    }
    setTimeout(
      () => dispatch({ type: LOGIN_ACTIONS.SET_ISLOADING, value: false }),
      1000
    );
  };

  const checkFormValidity = formValidObj => {
    const { username, password } = formValidObj;
    dispatch({
      type: LOGIN_ACTIONS.SET_ISFORM_VALID,
      value: username && password,
    });
  };

  const [userNameErrorState, setUsernameErrorState] = React.useState(false);
  const [passwordErrorState, setPasswordErrorState] = React.useState(false);

  return (
    <div className="page-container">
      <div className="login-container">
        <HeadingOne>Log In</HeadingOne>
        <form>
          <div
            className={[
              'form-group',
              userNameErrorState ? 'has-error' : '',
            ].join(' ')}
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
            className={[
              'form-group',
              passwordErrorState ? 'has-error' : '',
            ].join(' ')}
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
            customLoadingPreImage={
              <div className="loading-icon">
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              </div>
            }
            className={[
              'btn btn-primary',
              state.isLoading ? 'btn-loading' : '',
            ].join(' ')}
            type="submit"
          />
        </form>
        <div className="link-container">
          <Link>Forgotten Password</Link>
          <Link>Sign Up!</Link>
        </div>
      </div>
    </div>
  );
};
