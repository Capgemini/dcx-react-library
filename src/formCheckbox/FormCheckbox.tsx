import React from 'react';
import { FormRadioCheckboxProps } from '../common/components/commonTypes';
import { CheckboxRadioBase, Roles } from '../common';

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
  nested,
  inputClassName,
  labelClassName,
  itemClassName,
}: FormRadioCheckboxProps & {
  onChange?: (event: React.ChangeEvent, conditional?: string) => void;
}) => (
  <CheckboxRadioBase
    type="checkbox"
    id={id}
    role={Roles.formCheckbox}
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
    inputClassName={inputClassName}
    labelClassName={labelClassName}
    itemClassName={itemClassName}
  />
);
