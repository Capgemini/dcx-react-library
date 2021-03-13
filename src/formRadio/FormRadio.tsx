import React from 'react';
import { roles } from '../common';

type FormRadioProps = {
  /**
   * radio id
   */
  id?: string;
  /**
   * radio name
   */
  name: string;
  /**
   * radio value
   */
  value: string;
  /**
   * label
   */
  label: string;
  /**
   * allows for customisation of the radio label with all the properites needed
   **/
  labelProps?: any;
  /**
   * allows for customisation of the radio input with all the properites needed
   **/
  inputProps?: any;
  /**
   * allows for customisation of the radio input with all the properites needed
   **/
  itemProps?: any;
  /**
   * radio ariaLabel
   **/
  ariaLabel?: string;
  /**
   * function that will trigger all the time there's a change on the radio
   **/
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
};

export const FormRadio = ({
  id,
  name,
  value,
  label,
  inputProps,
  itemProps,
  labelProps,
  ariaLabel,
  onChange,
}: FormRadioProps) => {
  const handleChange = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <div {...itemProps} role={roles.formRadio}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        aria-label={ariaLabel || name}
        {...inputProps}
        onChange={handleChange}
      />
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
