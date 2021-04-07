import React from 'react';
import { Roles } from '../common';

export type SelectOption = {
  /**
   * select option label
   */
  label: string;
  /**
   * select option value
   */
  value: string;
};

export type FormSelectProps = {
  /**
   * select options
   */
  options: SelectOption[];
  /**
   * handle the change when the user select the option
   */
  onChange: (evt: React.FormEvent<HTMLSelectElement>) => void;
  /**
   * set the value
   */
  value: string;
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
};

export const FormSelect = ({
  name,
  options,
  onChange,
  value,
  id,
  selectProps,
  optionProps,
}: FormSelectProps) => {
  const selectOptions = options.map((item: SelectOption) => (
    <option value={item.value} key={item.value} {...optionProps}>
      {item.label}
    </option>
  ));

  return (
    <div role={Roles.formSelect}>
      <select
        value={value}
        onChange={onChange}
        name={name || 'formSelect'}
        id={id || 'formSelect'}
        {...selectProps}
      >
        {selectOptions}
      </select>
    </div>
  );
};
