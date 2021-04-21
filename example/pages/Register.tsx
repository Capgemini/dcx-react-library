import * as React from 'react';
import { HeadingOne, Label } from '../generated-components';
import './login.scss';
import { usernameValidation } from './validationRules';
import {
  FormInput,
  Button,
  FormCheckbox,
  FormRadio,
  FormSelect,
  Toggle,
  FormGroup,
  Autocomplete,
} from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  username: '',
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
  },
};

enum LOGIN_ACTIONS {
  UPDATE_USERNAME = 'updateUsername',
  UPDATE_GENDER = 'updateGender',
  UPDATE_COUNTRY = 'updateCountry',
  UPDATE_THEME = 'updateTheme',
  UPDATE_HEARD_ABOUT = 'updateHeardAbout',
  UPDATE_TERMS = 'updateTerms',
  UPDATE_LANGUAGE = 'updateLanguage',
  SET_ISFORM_VALID = 'setIsFormValid',
  SET_DISPLAY_USERNAME_ERROR = 'setDisplayUsernameError',
  SET_ISUSERNAME_VALID = 'setUsernameValid',
}

function reducer(state, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.UPDATE_USERNAME:
      return {
        ...state,
        username: action.value,
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
    default:
      throw new Error();
  }
}

export const Register = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userNameErrorState, setUsernameErrorState] = React.useState(false);

  const handleUserNameValidity = (valid, isErrorMessageVisible) => {
    dispatch({ type: LOGIN_ACTIONS.SET_ISUSERNAME_VALID, value: valid });
    setUsernameErrorState(isErrorMessageVisible);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const fieldNames = [
      'username',
      'gender',
      'country',
      'heardAbout',
      'terms',
      'language',
    ].filter(name => state[name] === '' || !state[name]);
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
    <div>
      <HeadingOne>Register</HeadingOne>
      <form>
        <div
          className={['form-group', userNameErrorState ? 'has-error' : ''].join(
            ' '
          )}
        >
          <Label htmlFor="username">Username</Label>
          <FormInput
            name="username"
            type="text"
            value={state.username}
            onChange={evt =>
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
            errorPosition="bottom"
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
            inputProps={{
              className: 'class-name',
            }}
            itemProps={{
              className: 'class-name',
            }}
            labelProps={{
              style: { display: 'flex' },
            }}
            name="radio-name"
            selected={state.gender === 'male'}
            onChange={evt => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_GENDER,
                value: evt.currentTarget.value,
              });
              checkFormValidity();
            }}
          />
          <FormRadio
            label="Female"
            value="female"
            ariaLabel="female"
            ariaDescribedBy="gender-tag"
            id="gender-id-2"
            inputProps={{
              className: 'class-name',
            }}
            itemProps={{
              className: 'class-name',
            }}
            labelProps={{
              style: { display: 'flex' },
            }}
            name="radio-name"
            selected={state.gender === 'female'}
            onChange={evt => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_GENDER,
                value: evt.currentTarget.value,
              });
              checkFormValidity();
            }}
          />
          <FormRadio
            label="Other"
            value="other"
            ariaLabel="other"
            ariaDescribedBy="gender-tag"
            id="gender-id-3"
            inputProps={{
              className: 'class-name',
            }}
            itemProps={{
              className: 'class-name',
            }}
            labelProps={{
              style: { display: 'flex' },
            }}
            name="radio-name"
            selected={state.gender === 'other'}
            onChange={evt => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_GENDER,
                value: evt.currentTarget.value,
              });
              checkFormValidity();
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
            defaultValue=""
            minCharsBeforeSearch={2}
            debounceMs={2000}
            hintText="Please select which country you are from"
            hintClass="hintClass"
            resultUlClass="resultUlClass"
            resultlLiClass="resultlLiClass"
            resultNoOptionClass="resultNoOptionClass"
            resultActiveClass="resultActiveClass"
            notFoundText="No Country found"
            onSelected={value => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_COUNTRY,
                value,
              });
              checkFormValidity();
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
            onChange={evt => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_LANGUAGE,
                value: evt.currentTarget.value,
              });
              checkFormValidity();
            }}
          />
        </div>

        <div className="form-group">
          <Label htmlFor="theme">
            Would you want to use the light or dark theme
          </Label>
          <Toggle
            name="theme"
            checked={state.theme}
            onChange={value => {
              dispatch({
                type: LOGIN_ACTIONS.UPDATE_THEME,
                value,
              });
              checkFormValidity();
            }}
            onColor="green"
            offColor="gray"
            borderRadius="20"
          />
        </div>

        <div className="form-group">
          <FormGroup
            name="heard-about"
            inputProps={{
              className: 'class-name',
            }}
            itemProps={{
              className: 'class-name',
            }}
            labelProps={{
              className: 'class-name',
            }}
            items={[
              {
                label: 'Online',
                value: 'online',
                id: 'heard-about',
                onChange: evt => {
                  dispatch({
                    type: LOGIN_ACTIONS.UPDATE_HEARD_ABOUT,
                    value: evt.currentTarget.value,
                  });
                  checkFormValidity();
                },
              },
              {
                label: 'Magazine',
                value: 'magazine',
                id: 'heard-about-2',
                onChange: evt => {
                  dispatch({
                    type: LOGIN_ACTIONS.UPDATE_HEARD_ABOUT,
                    value: evt.currentTarget.value,
                  });
                  checkFormValidity();
                },
              },
              {
                label: 'Radio',
                value: 'radio',
                id: 'heard-about-3',
                onChange: evt => {
                  dispatch({
                    type: LOGIN_ACTIONS.UPDATE_HEARD_ABOUT,
                    value: evt.currentTarget.value,
                  });
                  checkFormValidity();
                },
              },
            ]}
            ariaDescribedBy="heard-about-hint"
            groupClasses="class-group"
            fieldsetClasses="field-set-class"
            hint={{
              id: 'heard-about-hint',
              text:
                'Please select the one closest to where you first heard about us',
              classes: 'hint-class',
            }}
            itemsClasses="item-classes"
            legend={{
              text: 'How did you hear about us?',
              classes: 'legend-class',
              isHeading: true,
              headingClasses: 'heading-class',
            }}
          />
        </div>

        <div className="form-group">
          <FormCheckbox
            label="By clicking this you agree to our terms and conditions"
            ariaLabel="aria-labelterms and conditions"
            value={false}
            id="checkbox-id"
            inputProps={{
              className: 'class-name',
              name: 'checkbox-name',
              onChange: () => {
                dispatch({
                  type: LOGIN_ACTIONS.UPDATE_TERMS,
                  value: !state.terms,
                });
                checkFormValidity();
              },
            }}
            itemProps={{
              className: 'class-name',
            }}
            labelProps={{
              style: { display: 'flex' },
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
          className={['btn btn-primary', isLoading ? 'btn-loading' : ''].join(
            ' '
          )}
          type="submit"
        />
      </form>
    </div>
  );
};
