import React from 'react';
import { DateType } from './FormDate';

type DateProps = DateType & {
  value: string;
  name: string;
  htmlFor: string;
  disabled?: boolean;
  handleChange: (evt: React.FormEvent<HTMLInputElement>) => void;
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
      type="number"
      onChange={handleChange}
      disabled={disabled}
    />
  </label>
);
