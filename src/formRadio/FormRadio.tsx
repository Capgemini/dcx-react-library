import React from 'react';
import { Roles } from '../common';

type FormRadioProps = {
  /**
   * radio name
   **/
  name: string;
  /**
   * radio label
   **/
  label: string;
  /**
   * radio value
   **/
  value: string;
  /**
   * radio id
   **/
  id?: string;
  /**
   * radio hint
   **/
  hint?: string;
  /**
   * allows for customisation of the radio hint with all the properites needed
   **/
  hintProps?: string;
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
   * specifies whether the radio should be disabled
   */
  disabled?: boolean;
  /**
   * specifies whether the radio should be selected
   */
  selected?: boolean;
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
  disabled,
  selected,
  hint,
  hintProps,
}: FormRadioProps) => (
  <div {...itemProps} role={Roles.formRadio}>
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      aria-label={ariaLabel || name}
      disabled={disabled}
      checked={selected}
      onChange={onChange}
      {...inputProps}
    />
    <label {...labelProps} htmlFor={id}>
      {label}
    </label>
    {hint && <div {...hintProps}>{hint}</div>}
  </div>
);
