import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FormInput, Button, classNames } from '@capgeminiuk/dcx-react-library';
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
//@ts-ignore
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
   * Any additional properties here will get added to the form element
   */
  formProps?: any;
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
   * The properties for the login button
   * isLoading - If the form should be displaying the loading state
   * buttonLabel - The text which will be visible on the button
   * loadingMessage - The message which will appear when the button is in the laoding state
   */
  buttonProps: {
    isLoading: boolean;
    buttonLabel?: string;
    loadingMessage?: string;
  };
  /**
   * The properties for the username input
   * usernameValidation - The validation rules for the username input
   * usernameLabel - The text which will be displayed above the username input
   * usernamePlaceholder - The text which will be displayed inside the username input
   */
  usernameProps: {
    usernameValidation: { rule: any; message: string };
    usernameLabel?: string;
    usernamePlaceholder?: string;
  };
  /**
   * The properties for the password input
   * passwordValidation - The validation rules for the password input
   * passwordLabel - The text which will be displayed above the password input
   * passwordPlaceholder - The text which will be displayed inside the password input
   */
  passwordProps: {
    passwordValidation: { rule: any; message: string };
    passwordLabel?: string;
    passwordPlaceholder?: string;
  };
};

export const LoginForm = ({
  onClick,
  submitEnabledByDefault = false,
  buttonProps,
  usernameProps,
  passwordProps,
  formProps,
}: LogInProps) => {
  const {
    usernameValidation,
    usernameLabel = 'Username',
    usernamePlaceholder = 'Enter your username',
  } = usernameProps;
  const {
    passwordValidation,
    passwordLabel = 'Password',
    passwordPlaceholder = 'Enter your password',
  } = passwordProps;
  const {
    isLoading = false,
    buttonLabel = 'Login',
    loadingMessage = 'loading...',
  } = buttonProps;

  const [state, dispatch] = React.useReducer(reducer, initialState);
  //@ts-ignore
  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    //@ts-ignore
    dispatch({ type: LOGIN_ACTIONS[`UPDATE_${name.toUpperCase()}`], value });
  };

  //@ts-ignore
  const handleUserNameValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: LOGIN_ACTIONS.SET_ISUSERNAME_VALID, value: valid });
    setUsernameErrorState(isErrorMessageVisible);
    checkFormValidity({
      username: valid,
      password: state.validation.passwordValid,
    });
  };
  //@ts-ignore
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
      ['username', 'password'].forEach((field) => {
        if (!state.validation[`${field}valid`]) {
          errorCount++;
          dispatch({
            //@ts-ignore
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
  //@ts-ignore
  const checkFormValidity = (formValidObj) => {
    const { username, password } = formValidObj;
    dispatch({
      type: LOGIN_ACTIONS.SET_ISFORM_VALID,
      value: username && password,
    });
  };

  const [userNameErrorState, setUsernameErrorState] = React.useState(false);
  const [passwordErrorState, setPasswordErrorState] = React.useState(false);

  return (
    <form {...formProps}>
      <div
        className={classNames([
          'form-group',
          { 'has-error': userNameErrorState },
        ])}
      >
        <Label htmlFor="username" className="control-label">
          {usernameLabel}
        </Label>
        <FormInput
          name="username"
          type="text"
          value={state.username}
          onChange={handleInputChange}
          isValid={handleUserNameValidity}
          displayError={state.validation.displayUsernameError}
          inputProps={{
            placeholder: usernamePlaceholder,
            autoComplete: 'username',
            className: 'form-control',
          }}
          errorProps={{
            className: 'help-block',
          }}
          validation={usernameValidation}
          //@ts-ignore
          errorPosition="bottom"
        />
      </div>

      <div
        className={classNames([
          'form-group',
          { 'has-error': passwordErrorState },
        ])}
      >
        <Label htmlFor="password" className="control-label">
          {passwordLabel}
        </Label>
        <FormInput
          name="password"
          type="password"
          value={state.password}
          onChange={handleInputChange}
          isValid={handlePasswordValidity}
          displayError={state.validation.displayPasswordError}
          inputProps={{
            placeholder: passwordPlaceholder,
            autoComplete: 'current-password',
            className: 'form-control',
          }}
          errorProps={{
            className: 'help-block',
          }}
          validation={passwordValidation}
          //@ts-ignore
          errorPosition="bottom"
        />
      </div>

      <Button
        label={buttonLabel}
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={submitEnabledByDefault ? false : !state.isFormValid}
        disableClickForMs={1}
        loadingLabel={loadingMessage}
        customLoadingPreImage={
          <div className="loading-icon">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          </div>
        }
        className={classNames([
          'btn btn-primary',
          { 'btn-loading': isLoading },
        ])}
        //@ts-ignore
        type="submit"
      />
    </form>
  );
};
