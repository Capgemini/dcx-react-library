import React from 'react';
import { ConditionalInputProps } from './commonTypes';

export const Conditional = ({
  name,
  label,
  type,
  className,
  groupClassName,
  id,
  inputClassName,
  inputId,
  labelClassName,
  value,
  onChange,
}: ConditionalInputProps & { onChange: React.ChangeEventHandler }) => {
  const onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={className} id={id}>
      <div className={groupClassName}>
        <label className={labelClassName} htmlFor={inputId}>
          {label}
        </label>
        <input
          className={inputClassName}
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
