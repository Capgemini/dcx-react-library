import React from 'react';
import { Button } from '@capgeminiuk/dcx-react-library';
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
      <h1>Simple props</h1>
      <Button onClick={() => {}} label="Register" />
      <h1>Simple props disable</h1>
      <Button onClick={() => {}} label="Register" disabled={true} />
      <h1>Complete</h1>
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
      <h1>Button with children element</h1>
      <Button isLoading={isLoading} onClick={() => {}}>
        <span>
          this is the content
          <strong> passed as children</strong>
        </span>
      </Button>
      <h1>Button with visually hidden text</h1>
      <Button
        label="label"
        onClick={() => {}}
        visuallyHiddenText={{
          text: 'this text is hidden',
          className: 'visually-hidden',
        }}
      />
    </>
  );
};
