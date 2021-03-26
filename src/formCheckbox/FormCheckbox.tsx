import React from 'react';
import { Roles } from '../common';

type FormCheckboxProps = {
  /**
   * checkbox name
   **/
  name: string;
  /**
   * checkbox label
   **/
  label: string;
  /**
   * checkbox value
   **/
  value: string;
  /**
   * checkbox id
   **/
  id?: string;
  /**
   * checkbox hint text
   **/
  hintText?: string;
  /**
   * allows for customisation of the checkbox hint with all the properites needed
   **/
  hintProps?: string;
  /**
   * allows for customisation of the checkbox label with all the properites needed
   **/
  labelProps?: any;
  /**
   * allows for customisation of the checkbox input with all the properites needed
   **/
  inputProps?: any;
  /**
   * allows for customisation of the checkbox input with all the properites needed
   **/
  itemProps?: any;
  /**
   * checkbox ariaLabel
   **/
  ariaLabel?: string;
  /**
   * specifies whether the checkbox should be disabled
   */
  disabled?: boolean;
  /**
   * specifies whether the checkbox should be pre-checked
   */
  defaultChecked?: boolean;
  /**
   * function that will trigger all the time there's a change on the checkbox
   **/
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
};

export const FormCheckbox = ({
  id,
  name,
  value,
  label,
  inputProps,
  itemProps,
  labelProps,
  ariaLabel,
  onChange,
  disabled,
  defaultChecked,
  hintText,
  hintProps,
}: FormCheckboxProps) => (
  <div {...itemProps} role={Roles.formCheckbox}>
    <input
      id={id}
      type="checkbox"
      name={name}
      value={value}
      aria-label={ariaLabel || name}
      disabled={disabled}
      defaultChecked={defaultChecked}
      onChange={onChange}
      {...inputProps}
    />
    <label {...labelProps} htmlFor={id}>
      {label}
    </label>
    {hintText && <div {...hintProps}>{hintText}</div>}
  </div>
);
