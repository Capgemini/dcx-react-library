import React from 'react';
import { DateType } from './FormDate';

type DateProps = DateType & {
  value: string;
  name: string;
  htmlFor: string;
  disabled?: boolean;
  maxLength?: number;
  handleChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  tabIndex?: number;
};

export const DateComponent = ({
  value,
  htmlFor,
  name,
  handleChange,
  classNameLabel,
  customLabel,
  classNameSpan,
  label,
  classNameInput,
  disabled,
  maxLength = 2,
  tabIndex,
}: DateProps) => (
  <label
    style={{ display: 'flex', flexDirection: 'column' }}
    className={classNameLabel}
    htmlFor={htmlFor}
  >
    {customLabel
      ? customLabel
      : label && <span className={classNameSpan}>{label}</span>}
    <input
      aria-label={name}
      className={classNameInput}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      inputMode="numeric"
      maxLength={maxLength}
      pattern="[0-9]*"
      tabIndex={tabIndex}
    />
  </label>
);
