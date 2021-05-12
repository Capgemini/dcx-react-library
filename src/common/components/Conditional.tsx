import React from 'react';
import { ConditionalInputProps } from '../components/commonTypes';

export const Conditional = ({
  label,
  className,
  id,
  groupClassName,
  labelClassName,
  inputId,
  inputClassName,
  name,
  type,
}: ConditionalInputProps) => (
  <div className={className} id={id}>
    <div className={groupClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input className={inputClassName} id={inputId} name={name} type={type} />
    </div>
  </div>
);
