import React from 'react';
import { Roles } from '../common';
import { Hint, HintProps } from '../common/components';

export type FormRadioProps = {
  /**
   * radio label
   */
  label: string;
  /**
   * radio value
   */
  value: string;
  /**
   * radio ariaLabel
   */
  ariaLabel?: string;
  /**
   * specifies whether the radio should be disabled
   */
  disabled?: boolean;
  /**
   * radio hint text
   */
  hint?: HintProps;
  /**
   * radio id
   */
  id?: string;
  /**
   * allows for customisation of the radio input with all the properites needed
   */
  inputProps?: any;
  /**
   * allows for customisation of the radio input with all the properites needed
   */
  itemProps?: any;
  /**
   * allows for customisation of the radio label with all the properites needed
   */
  labelProps?: any;
  /**
   * radio name
   */
  name?: string;
  /**
   * specifies whether the radio should be selected
   */
  selected?: boolean;
  /**
   * function that will trigger all the time there's a change on the radio
   */
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
};

export const FormRadio = ({
  label,
  value,
  id,
  ariaLabel,
  disabled,
  hint,
  inputProps,
  itemProps,
  name,
  labelProps,
  selected,
  onChange,
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
    {hint && <Hint {...hint} />}
  </div>
);
