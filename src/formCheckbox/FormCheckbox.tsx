import _ from 'lodash';
import React from 'react';
import {
  ConditionalInputProps,
  FormCheckboxProps,
} from '../common/components/commonTypes';
import { Hint } from '../common';

const conditionalEl = ({
  label,
  className,
  id,
  groupClassName,
  labelClassName,
  inputId,
  inputClassName,
  name,
  type,
}: ConditionalInputProps) => (
  <div className={className} id={id}>
    <div className={groupClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      <input className={inputClassName} id={inputId} name={name} type={type} />
    </div>
  </div>
);

export const FormCheckbox = ({
  id,
  name,
  value,
  label,
  inputProps,
  itemProps,
  labelProps,
  ariaLabel,
  ariaDataControls = '',
  ariaDescribedBy = '',
  ariaLabelledBy,
  onChange,
  conditional,
  disabled,
  selected,
  hint,
  hintPosition = 'below',
}: FormCheckboxProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && selected === true;

  return (
    <div {...itemProps}>
      {hint && hintPosition === 'above' && <Hint {...hint} />}
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        aria-label={ariaLabel || name}
        data-aria-controls={ariaDataControls}
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy || labelProps ? labelProps.id : ''}
        disabled={disabled}
        defaultChecked={selected}
        onChange={onChange}
        {...inputProps}
      />
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      {hint && hintPosition === 'below' && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        conditionalEl(conditional)}
    </div>
  );
};
