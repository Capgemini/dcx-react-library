import React from 'react';
import { LabelProps } from './commonTypes';

export const Label = ({
  label,
  labelProperties,
  htmlFor,
  className,
}: LabelProps) =>
  label ? (
    <label {...labelProperties} htmlFor={htmlFor} className={className}>
      {label}
    </label>
  ) : null;
