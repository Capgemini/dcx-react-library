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
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.shape({
    text: PropTypes.string.isRequired,
    classes: PropTypes.string,
    id: PropTypes.string,
  }),
  id: PropTypes.string,
  inputProps: PropTypes.any,
  itemProps: PropTypes.any,
  labelProps: PropTypes.any,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};
