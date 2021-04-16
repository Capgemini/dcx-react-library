import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormInput, Button } from 'dcx-react-library';
import { Label } from '../../generated-components';

const initialState = {
  username: '',
  password: '',
  isFormValid: false,
  validation: {
    usernameValid: false,
    displayUsernameError: false,
    passwordValid: false,
    displayPasswordError: false,
  },
};

enum LOGIN_ACTIONS {
  UPDATE_USERNAME = 'updateUsername',
  UPDATE_PASSWORD = 'updatePassword',
  SET_ISFORM_VALID = 'setIsFormValid',
  SET_ISUSERNAME_VALID = 'setUsernameValid',
  SET_ISPASSWORD_VALID = 'setPasswordValid',
  SET_DISPLAY_USERNAME_ERROR = 'setDisplayUsernameError',
  SET_DISPLAY_PASSWORD_ERROR = 'setDisplayPasswordError',
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
    case LOGIN_ACTIONS.SET_DISPLAY_USERNAME_ERROR:
      return {
        ...state,
        validation: {
          ...state.validation,
          displayUsernameError: action.value,
        },
      };
    case LOGIN_ACTIONS.SET_DISPLAY_PASSWORD_ERROR:
      return {
        ...state,
        validation: {
          ...state.validation,
          displayPasswordError: action.value,
        },
      };
    default:
      throw new Error();
  }
}

type LogInProps = {
  /**
   * handler for the click event
   */
  onClick: (
    isFormValid: boolean,
    formValues: { username: string; password: string }
  ) => void;
  /**
   * define if the forms submit button should be disabled or enabld by default
   */
  submitEnabledByDefault?: boolean;
  /**
   * If the form should be displaying the loading state
   */
  isLoading: boolean;
  /**
   * The validation rules for the username input
   */
  usernameValidation: { rule: any; message: string };
  /**
   * The validation for the password input
   */
  passwordValidation: { rule: any; message: string };
};

export const LoginForm = ({
  onClick,
  submitEnabledByDefault = false,
  isLoading = false,
  usernameValidation,
  passwordValidation,
  ...props
}: LogInProps) => {
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
    if (submitEnabledByDefault) {
      let errorCount = 0;
      ['username', 'password'].forEach(field => {
        if (!state.validation[`${field}valid`]) {
          errorCount++;
          dispatch({
            type: LOGIN_ACTIONS[`SET_DISPLAY_${field.toUpperCase()}_ERROR`],
            value: true,
          });
        }
      });
      dispatch({
        type: LOGIN_ACTIONS.SET_ISFORM_VALID,
        value: errorCount === 0,
      });
    }
    onClick(state.isFormValid, {
      username: state.username,
      password: state.password,
    });
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
    <form {...props}>
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
          displayError={state.validation.displayUsernameError}
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
          displayError={state.validation.displayPasswordError}
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
        isLoading={isLoading}
        disabled={submitEnabledByDefault ? false : !state.isFormValid}
        disableClickForMs={1}
        loadingLabel="loading..."
        customLoadingPreImage={
          <div className="loading-icon">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          </div>
        }
        className={['btn btn-primary', isLoading ? 'btn-loading' : ''].join(
          ' '
        )}
        type="submit"
      />
    </form>
  );
};
