import { Button } from '../../src/button/Button';
import React, {useState} from 'react';

export default {
  title: 'DCXLibrary/Form/Button/Styled',
  component: Button,
};

export const Basic = {
  render: () => {
    const buttonHandler = (evt) => {
      console.log(evt);
    };

    return (
      <Button
        label="Save and continue"
        className="govuk-button"
        onClick={buttonHandler}
      />
    );
  },

  name: 'basic',
};

export const WithImage = {
  render: () => {
    const buttonHandler = (evt) => {
      console.log(evt);
    };

    return (
      <Button
        label="Start now"
        className="govuk-button"
        customPostfixImg={
          <svg
            class="govuk-button__start-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="17.5"
            height="19"
            viewBox="0 0 33 40"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"></path>
          </svg>
        }
        onClick={buttonHandler}
      />
    );
  },

  name: 'with Image',
};

export const Disabled = {
  render: () => {
    const buttonHandler = (evt) => {
      console.log(evt);
    };

    return (
      <Button
        label="Disabled button"
        disabled={true}
        className="govuk-button"
        onClick={buttonHandler}
      />
    );
  },

  name: 'disabled',
};

export const Loading = {
  render: () => {
    const [isLoading, setIsLoading] = useState(false);

    const buttonHandler = (evt) => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <Button
        label="Register"
        className="govuk-button"
        onClick={buttonHandler}
        isLoading={isLoading}
        loadingLabel="Loading..."
      />
    );
  },

  name: 'loading',
};
