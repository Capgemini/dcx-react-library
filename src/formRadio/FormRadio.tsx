import React from 'react';
import { Roles } from '../common';
import { Hint, FormRadioProps } from '../common/components';

export const FormRadio = ({
  label,
  value,
  id,
  ariaLabel,
  ariaDescribedBy,
  ariaLabelledBy,
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
      aria-describedby={ariaDescribedBy || ''}
      aria-labelledby={ariaLabelledBy || labelProps.id}
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
