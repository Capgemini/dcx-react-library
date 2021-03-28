import React from 'react';
import { Button } from 'dcx-react-library';

export const ButtonDemo = () => (
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
);
