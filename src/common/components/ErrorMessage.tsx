import React from 'react';
import { ErrorMessageProps } from './commonTypes';

export const ErrorMessage = ({
  text,
  className,
  id,
  visuallyHiddenText,
}: ErrorMessageProps) => {
  const getErrorElement = () => {
    let errorElement = <></>;
    if (text && typeof text === 'string') {
      errorElement = (
        <span id={id} className={['dcx-error-message', className].join(' ')}>
          {visuallyHiddenText && (
            <span className={visuallyHiddenText.className}>
              {visuallyHiddenText.text}
            </span>
          )}
          {text}
        </span>
      );
    }
    return errorElement;
  };

  return <>{getErrorElement()}</>;
};
