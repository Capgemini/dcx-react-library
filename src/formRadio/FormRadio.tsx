import _ from 'lodash';
import React from 'react';
import { Roles } from '../common';

import { Hint, Conditional } from '../common/components';

import { FormRadioProps } from '../common/components/commonTypes';

export const FormRadio = ({
  label,
  value,
  id,
  ariaLabel,
  ariaDataControls,
  ariaDescribedBy,
  ariaLabelledBy,
  disabled,
  conditional,
  hint,
  inputProps,
  itemProps,
  labelProps,
  name,
  nested,
  selected,
  onChange,
}: FormRadioProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && selected === true;

  const input: JSX.Element = (
    <input
      id={id}
      type="radio"
      role={Roles.formRadio}
      value={value}
      name={name}
      aria-label={ariaLabel || name}
      data-aria-controls={ariaDataControls || ''}
      aria-describedby={ariaDescribedBy || ''}
      aria-labelledby={ariaLabelledBy || labelProps?.id}
      disabled={disabled}
      checked={selected}
      {...inputProps}
      onChange={onChange}
    />
  );

  const radio: JSX.Element = nested ? (
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
      {radio}
      {hint && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        Conditional(conditional)}
    </div>
  );
};
