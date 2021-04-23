import React, { useState, ChangeEvent } from 'react';
import {
  ErrorMessage,
  ErrorMessageProps,
  Hint,
  HintProps,
  Roles,
} from '../common';

export type SelectOption = {
  /**
   * select option label
   */
  label: string;
  /**
   * select option value
   */
  value: string;
  /**
   * select className
   */
  className?: string;
  /**
   * select option disabled
   */
  disabled?: boolean;
  /**
   * select id
   */
  id?: string;
  /**
   * select option preselected
   */
  selected?: boolean;
  /**
   * select properties
   */
  selectProperties?: any;
};

export type FormSelectProps = {
  /**
   * select options
   */
  options: SelectOption[];
  /**
   * handle the change when the user select the option
   */
  onChange?: (evt: ChangeEvent<HTMLSelectElement>) => void;
  /**
   * select name
   */
  name?: string;
  /**
   * select id
   */
  id?: string;
  /**
   * allow to customise the select with all the properties needed
   **/
  selectProps?: any;
  /**
   * allow to customise the select options with all the properties needed
   **/
  optionProps?: any;
  /**
   * define the aria-label
   */
  ariaLabel?: string;
  /**
   * select label
   */
  label?: string;
  /**
   * select label properties for optional label
   */
  labelProps?: any;
  /**
   * select label hint
   */
  hint?: HintProps;
  /**
   * select error
   */
  error?: ErrorMessageProps;
};

export const FormSelect = ({
  name,
  options,
  onChange,
  id,
  selectProps,
  optionProps,
  ariaLabel,
  label,
  labelProps,
  hint,
  error,
}: FormSelectProps) => {
  const preselectedValue = options.find(option => option.selected);
  const initialValue: string =
    preselectedValue !== undefined ? preselectedValue.value : options[0].value;
  const [value, setValue] = useState<string>(initialValue);
  const selectOptions = options.map((item: SelectOption) => (
    <option
      value={item.value}
      key={item.value}
      aria-label={Roles.listItem}
      id={item.id}
      disabled={item.disabled}
      className={item.className}
      {...item.selectProperties}
      {...optionProps}
    >
      {item.label}
    </option>
  ));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <>
      {label && (
        <label {...labelProps} htmlFor={id}>
          {label}
        </label>
      )}
      {hint && <Hint {...hint} />}
      {error && <ErrorMessage {...error} />}
      <select
        value={value}
        onChange={handleChange}
        name={name || 'formSelect'}
        id={id || 'formSelect'}
        aria-label={ariaLabel || Roles.list}
        {...selectProps}
      >
        {selectOptions}
      </select>
    </>
  );
};
