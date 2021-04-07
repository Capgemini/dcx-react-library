import React, { useState } from 'react';
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
   * select name
   */
  name: string;
  /**
   * select options
   */
  options: SelectOption[];
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
  id,
  selectProps,
  optionProps,
}: FormSelectProps) => {
  const [value, setValue] = useState<string>();

  const handleChange = (evt: React.FormEvent<HTMLSelectElement>) => {
    setValue(evt.currentTarget.value);
  };

  const selectOptions = options.map((item: SelectOption) => (
    <option value={item.value} key={item.value} {...optionProps}>
      {item.label}
    </option>
  ));

  return (
    <div role={Roles.formSelect}>
      <select
        value={value}
        onChange={handleChange}
        name={name}
        id={id || 'formSelect'}
        {...selectProps}
      >
        {selectOptions}
      </select>
    </div>
  );
};
