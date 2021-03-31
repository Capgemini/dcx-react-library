import React from 'react';
import PropTypes from 'prop-types';
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
  name,
  selected,
}: FormRadioProps) => (
  <div {...itemProps} role={Roles.formRadio}>
    <input
      id={id}
      type="radio"
      value={value}
      name={name}
      aria-label={ariaLabel || name}
      aria-describedby={ariaDescribedBy || ''}
      aria-labelledby={ariaLabelledBy || labelProps ? labelProps.id : ''}
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

FormRadio.propTypes = {
  name: PropTypes.string.isRequired,
};
