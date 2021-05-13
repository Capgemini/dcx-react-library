import _ from 'lodash';
import React from 'react';
import { FormCheckboxProps } from '../common/components/commonTypes';
import { Hint, Conditional } from '../common';

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
  nested,
}: FormCheckboxProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && selected === true;

  const input: JSX.Element = (
    <input
      id={id}
      type="checkbox"
      name={name}
      value={value}
      aria-label={ariaLabel || name}
      data-aria-controls={ariaDataControls}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy || labelProps?.id}
      disabled={disabled}
      defaultChecked={selected}
      onChange={onChange}
      {...inputProps}
    />
  );

  const checkbox: JSX.Element = nested ? (
    <label {...labelProps}>
      {input}
      {label}
    </label>
  ) : (
    <>
      {input}
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
    </>
  );

  return (
    <div {...itemProps}>
      {hint && hintPosition === 'above' && <Hint {...hint} />}
      {checkbox}
      {hint && hintPosition === 'below' && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        Conditional(conditional)}
    </div>
  );
};
