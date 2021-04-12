import React from 'react';
import { Button } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const ButtonDemo = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 10000);
  };

  return (
    <>
      <Button
        label="Start Now"
        onClick={() => {}}
        disableClickForMs={2000}
        customPostfixImg={
          <svg
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
        customPrefixImg={
          <svg
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
      />

      <h1>Loading button</h1>
      <Button
        isLoading={isLoading}
        onClick={handleClick}
        label="Register"
        customLoadingPostImage={
          <FontAwesomeIcon
            icon={faSpinner}
            spin={true}
            style={{ marginLeft: '5px' }}
          />
        }
      />
    </>
  );
};
