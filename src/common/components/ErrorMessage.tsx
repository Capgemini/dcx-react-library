import React from 'react';
import { ErrorMessageProps } from '../components/commonTypes';

export const ErrorMessage = ({
  text,
  classes,
  id,
  visuallyHiddenText,
}: ErrorMessageProps) => (
  <span id={id} className={classes}>
    {visuallyHiddenText && (
      <span className={visuallyHiddenText.classes}>
        {visuallyHiddenText.text}
      </span>
    )}
    {text}
  </span>
);
