import _ from 'lodash';
import React from 'react';

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
  selected,
  onChange,
}: FormRadioProps) => {
  const conditionalReveal = (): boolean =>
    !_.isEmpty(conditional) && selected === true;

  return (
    <div {...itemProps}>
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        aria-label={ariaLabel || name}
        data-aria-controls={ariaDataControls || ''}
        aria-describedby={ariaDescribedBy || ''}
        aria-labelledby={ariaLabelledBy || labelProps ? labelProps.id : ''}
        disabled={disabled}
        checked={selected}
        {...inputProps}
        onChange={onChange}
      />
      <label {...labelProps} htmlFor={id}>
        {label}
      </label>
      {hint && <Hint {...hint} />}
      {conditional !== undefined &&
        conditionalReveal() &&
        Conditional(conditional)}
    </div>
  );
};
