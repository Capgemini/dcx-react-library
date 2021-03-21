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
   * specifies whether the radio should be selected
   */
  selected?: boolean;
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
  labelProps,
  selected,
}: FormRadioProps) => (
  <div {...itemProps} role={Roles.formRadio}>
    <input
      id={id}
      type="radio"
      value={value}
      aria-label={ariaLabel || inputProps.name}
      disabled={disabled}
      checked={selected}
      {...inputProps}
    />
    <label {...labelProps} htmlFor={id}>
      {label}
    </label>
    {hint && <Hint {...hint} />}
  </div>
);
