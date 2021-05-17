import React, { useState } from 'react';
import { ConditionalInputProps } from '../components/commonTypes';

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
}: ConditionalInputProps) => {
  const [conditionalValue, setConditionalValue] = useState<string | undefined>(
    value
  );

  const onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConditionalValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
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
          value={conditionalValue}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
