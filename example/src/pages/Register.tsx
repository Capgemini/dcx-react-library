import * as React from 'react';
import { HeadingOne, Label } from '../generated-components';
import './register.scss';
import { usernameValidation, passwordValidation } from './validationRules';
import {
  FormInput,
  Button,
  FormCheckbox,
  FormRadio,
  FormSelect,
  Toggle,
  RadioGroup,
  Autocomplete,
  FormDate,
  ErrorPosition,
  BUTTON_TYPE,
  classNames,
} from '@capgeminiuk/dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpinner,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

const initialState = {
  username: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  country: '',
  theme: false,
  heardAbout: '',
  terms: false,
  language: '',
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
  UPDATE_DATE_OF_BIRTH = 'updateDateOfBirth',
  UPDATE_GENDER = 'updateGender',
  UPDATE_COUNTRY = 'updateCountry',
  UPDATE_THEME = 'updateTheme',
  UPDATE_HEARD_ABOUT = 'updateHeardAbout',
  UPDATE_TERMS = 'updateTerms',
  UPDATE_LANGUAGE = 'updateLanguage',
  SET_ISFORM_VALID = 'setIsFormValid',
  SET_DISPLAY_USERNAME_ERROR = 'setDisplayUsernameError',
  SET_ISUSERNAME_VALID = 'setUsernameValid',
  SET_ISPASSWORD_VALID = 'setPasswordValid',
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
    case LOGIN_ACTIONS.UPDATE_DATE_OF_BIRTH:
      return {
        ...state,
        dateOfBirth: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_GENDER:
      return {
        ...state,
        gender: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_COUNTRY:
      return {
        ...state,
        country: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_THEME:
      return {
        ...state,
        theme: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_HEARD_ABOUT:
      return {
        ...state,
        heardAbout: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_TERMS:
      return {
        ...state,
        terms: action.value,
      };
    case LOGIN_ACTIONS.UPDATE_LANGUAGE:
      return {
        ...state,
        language: action.value,
      };
    case LOGIN_ACTIONS.SET_ISFORM_VALID:
      return {
        ...state,
        isFormValid: action.value,
      };
    case LOGIN_ACTIONS.SET_DISPLAY_USERNAME_ERROR:
      return {
        ...state,
        validation: {
          ...state.validation,
          displayUsernameError: action.value,
        },
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

export const Register = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userNameErrorState, setUsernameErrorState] = React.useState(false);
  const [passwordErrorState, setPasswordErrorState] = React.useState(false);
  const [passwordInputType, setPasswordInputType] = React.useState(false);
  const [displayDobError, setDobError] = React.useState(false);

  //@ts-ignore
  React.useEffect(() => {
    checkFormValidity();
  }, [
    state.username,
    state.password,
    state.dateOfBirth,
    state.gender,
    state.country,
    state.heardAbout,
    state.terms,
    state.language,
  ]);
  //@ts-ignore
  const handleUserNameValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: LOGIN_ACTIONS.SET_ISUSERNAME_VALID, value: valid });
    setUsernameErrorState(isErrorMessageVisible);
  };
  //@ts-ignore
  const handlePasswordValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: LOGIN_ACTIONS.SET_ISPASSWORD_VALID, value: valid });
    setPasswordErrorState(isErrorMessageVisible);
  };

  const updatePasswordInput = () => {
    setPasswordInputType(!passwordInputType);
  };

  const checkFormValidity = () => {
    const fieldNames = [
      'username',
      'password',
      'dateOfBirth',
      'gender',
      'country',
      'heardAbout',
      'terms',
      'language',
    ].filter((name) => state[name] === '' || !state[name]);
    dispatch({
      type: LOGIN_ACTIONS.SET_ISFORM_VALID,
      value: fieldNames.length === 0,
    });
  };

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="register-form">
      <HeadingOne>Register</HeadingOne>
      <form>
        <div
          className={classNames([
            'form-group',
            { 'has-error': userNameErrorState },
          ])}
        >
          <Label htmlFor="username">Username</Label>
          <FormInput
            name="username"
            type="text"
            value={state.username}
            onChange={(evt) =>
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_USERNAME,
                value: evt.currentTarget.value,
              })
            }
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
            errorPosition={ErrorPosition.BOTTOM}
          />
        </div>

        <div
          className={classNames([
            'form-group',
            { 'has-error': passwordErrorState },
          ])}
        >
          <Label htmlFor="password" className="control-label">
            Password
          </Label>
          <FormInput
            name="password"
            type={!passwordInputType ? 'password' : 'text'}
            value={state.password}
            onChange={(evt) =>
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_PASSWORD,
                value: evt.currentTarget.value,
              })
            }
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
            errorPosition={ErrorPosition.BOTTOM}
            suffix={{
              content: (
                <FontAwesomeIcon
                  icon={!passwordInputType ? faEye : faEyeSlash}
                />
              ),
              properties: {
                className: 'btn btn-default password-eye-btn',
                onClick: updatePasswordInput,
              },
            }}
          />
        </div>

        <div
          className={classNames([
            'form-group',
            { 'has-error': displayDobError },
          ])}
        >
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <FormDate
            handleValidity={(isValid, value) => {
              if (isValid) {
                dispatch({
                  type: LOGIN_ACTIONS.UPDATE_DATE_OF_BIRTH,
                  value,
                });
              }
              setDobError(!isValid);
            }}
            errorClass="help-block"
            errorMessage="Please enter a valid date"
            displayError={displayDobError}
            dateFormat="dd/mm/yyyy"
            inputContainerClass="date-of-birth-container"
            yearProps={{
              classNameLabel: 'max-width',
              classNameInput: 'form-control',
              customLabel: <label>Year</label>,
            }}
            monthProps={{
              classNameLabel: 'max-width',
              classNameInput: 'form-control',
              customLabel: <label>Month</label>,
            }}
            dayProps={{
              classNameLabel: 'max-width',
              classNameInput: 'form-control',
              customLabel: <label>Day</label>,
            }}
          />
        </div>

        <div className="form-group">
          <Label id="gender-tag">Gender</Label>
          <FormRadio
            label="Male"
            value="male"
            ariaLabel="male"
            ariaDescribedBy="gender-tag"
            id="gender-id-1"
            itemProps={{
              className: 'form-button-container',
            }}
            labelProps={{
              className: 'form-btn-label',
            }}
            name="radio-name"
            selected={state.gender === 'male'}
            onChange={(evt) => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_GENDER,
                //@ts-ignore
                value: evt.currentTarget.value,
              });
            }}
          />
          <FormRadio
            label="Female"
            value="female"
            ariaLabel="female"
            ariaDescribedBy="gender-tag"
            id="gender-id-2"
            itemProps={{
              className: 'form-button-container',
            }}
            labelProps={{
              className: 'form-btn-label',
            }}
            name="radio-name"
            selected={state.gender === 'female'}
            onChange={(evt) => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_GENDER,
                //@ts-ignore
                value: evt.currentTarget.value,
              });
            }}
          />
          <FormRadio
            label="Other"
            value="other"
            ariaLabel="other"
            ariaDescribedBy="gender-tag"
            id="gender-id-3"
            itemProps={{
              className: 'form-button-container',
            }}
            labelProps={{
              className: 'form-btn-label',
            }}
            name="radio-name"
            selected={state.gender === 'other'}
            onChange={(evt) => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_GENDER,
                //@ts-ignore
                value: evt.currentTarget.value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <Autocomplete
            options={[
              'United Kingdom',
              'France',
              'Germany',
              'Italy',
              'United States of America',
              'Spain',
              'Japan',
            ]}
            minCharsBeforeSearch={1}
            debounceMs={500}
            hintText="Please select which country you are from"
            resultUlClass="auto-complete-container"
            resultlLiClass="auto-complete-item"
            resultNoOptionClass="auto-complete-container"
            notFoundText="No Country found"
            inputProps={{
              className: 'form-control',
              placeholder: 'Enter your country',
            }}
            onSelected={(value) => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_COUNTRY,
                value,
              });
            }}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="country-select">Language</Label>
          <FormSelect
            name="country-select"
            value={state.language}
            options={[
              { label: 'Please select', value: '' },
              { label: 'English', value: 'en_gb' },
              { label: 'German', value: 'de_de' },
              { label: 'French', value: 'fr_fr' },
            ]}
            onChange={(evt) => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_LANGUAGE,
                value: (evt as React.ChangeEvent<HTMLSelectElement>).currentTarget.value,
              });
            }}
          />
        </div>

        <div className="form-group flex-column">
          <Label htmlFor="theme">
            Would you want to use the light or dark theme
          </Label>
          <Toggle
            checked={state.theme}
            onChange={(value) => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_THEME,
                value,
              });
            }}
            onColor="#369af1"
            offColor="gray"
            borderRadius="20"
          />
        </div>

        <div className="form-group">
          <RadioGroup
            name="heard-about"
            inputProps={{
              className: 'class-name',
            }}
            itemProps={{
              className: 'form-button-container',
            }}
            labelProps={{
              className: 'form-btn-label',
            }}
            items={[
              {
                label: 'Online',
                value: 'online',
                id: 'heard-about',
                //@ts-ignore
                onChange: (evt) => {
                  dispatch({
                    type: LOGIN_ACTIONS.UPDATE_HEARD_ABOUT,
                    value: evt.currentTarget.value,
                  });
                },
              },
              {
                label: 'Magazine',
                value: 'magazine',
                id: 'heard-about-2',
                //@ts-ignore
                onChange: (evt) => {
                  dispatch({
                    type: LOGIN_ACTIONS.UPDATE_HEARD_ABOUT,
                    value: evt.currentTarget.value,
                  });
                },
              },
              {
                label: 'Radio',
                value: 'radio',
                id: 'heard-about-3',
                //@ts-ignore
                onChange: (evt) => {
                  dispatch({
                    type: LOGIN_ACTIONS.UPDATE_HEARD_ABOUT,
                    value: evt.currentTarget.value,
                  });
                },
              },
            ]}
            ariaDescribedBy="heard-about-hint"
            groupClasses="class-group"
            fieldsetClasses="field-set-class"
            hint={{
              id: 'heard-about-hint',
              text: 'Please select the one closest to where you first heard about us',
              className: 'hint-class',
            }}
            itemsClasses="item-classes"
            legend={{
              text: 'How did you hear about us?',
              className: 'legend-class',
            }}
          />
        </div>

        <div className="form-group">
          <FormCheckbox
            label="By clicking this you agree to our terms and conditions"
            ariaLabel="aria-labelterms and conditions"
            value="false"
            id="checkbox-id"
            onChange={() => {}}
            inputProps={{
              type: 'checkbox',
              name: 'checkbox-name',
              onChange: () => {
                dispatch({
                  type: LOGIN_ACTIONS.UPDATE_TERMS,
                  value: !state.terms,
                });
              },
            }}
            labelProps={{
              className: 'form-btn-label',
            }}
            itemProps={{
              className: 'form-button-container',
            }}
          />
        </div>

        <Button
          label="Submit"
          onClick={onSubmit}
          isLoading={isLoading}
          disabled={!state.isFormValid}
          disableClickForMs={1}
          loadingLabel="Loading..."
          customLoadingPreImage={
            <div className="loading-icon">
              <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            </div>
          }
          className={classNames([
            'btn btn-primary',
            { 'btn-loading': isLoading },
          ])}
          type={BUTTON_TYPE.SUBMIT}
        />
      </form>
    </div>
  );
};
