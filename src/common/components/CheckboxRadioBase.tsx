import { isEmpty } from 'lodash';
import React from 'react';
import { Hint } from './Hint';
import { Conditional } from './Conditional';
import { FormRadioCheckboxProps } from './commonTypes';

export const CheckboxRadioBase = ({
  label,
  value,
  type,
  role,
  id,
  ariaLabel,
  ariaDataControls,
  ariaDescribedBy,
  ariaLabelledBy,
  disabled,
  conditional,
  hint,
  hintPosition,
  inputProps,
  itemProps,
  labelProps,
  name,
  nested,
  selected,
  onChange,
}: FormRadioCheckboxProps) => {
  const conditionalReveal = (): boolean =>
    !isEmpty(conditional) && selected === true;

  const input: JSX.Element = (
    <input
      id={id}
      type={type}
      role={role}
      value={value}
      name={name}
      aria-label={ariaLabel}
      data-aria-controls={ariaDataControls}
      aria-describedby={ariaDescribedBy}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      checked={selected}
      {...inputProps}
      onChange={onChange}
    />
  );
  const el: JSX.Element = nested ? (
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
      {el}
      {hint && hintPosition === 'below' && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        Conditional(conditional)}
    </div>
  );
};
