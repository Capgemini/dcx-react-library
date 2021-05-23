import React from 'react';
import { Roles } from '../common';

import { CheckboxRadioBase } from '../common/components';

import { FormRadioCheckboxProps } from '../common/components/commonTypes';

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
}: FormRadioCheckboxProps & {
  onChange: (event: React.ChangeEvent, conditional?: string) => void;
}) => (
  <CheckboxRadioBase
    type="radio"
    id={id}
    role={Roles.formRadio}
    name={name}
    value={value}
    label={label}
    inputProps={inputProps}
    itemProps={itemProps}
    labelProps={labelProps}
    ariaLabel={ariaLabel || name}
    ariaDataControls={ariaDataControls}
    ariaDescribedBy={ariaDescribedBy}
    ariaLabelledBy={ariaLabelledBy || labelProps?.id}
    onChange={onChange}
    conditional={conditional}
    disabled={disabled}
    selected={selected}
    hint={hint}
    nested={nested}
  />
);
