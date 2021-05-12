import React from 'react';
import { ErrorMessageProps } from '../components/commonTypes';

export const ErrorMessage = ({
  text,
  className,
  id,
  visuallyHiddenText,
}: ErrorMessageProps) => (
  <span id={id} className={className}>
    {visuallyHiddenText && (
      <span className={visuallyHiddenText.className}>
        {visuallyHiddenText.text}
      </span>
    )}
    {text}
  </span>
);
