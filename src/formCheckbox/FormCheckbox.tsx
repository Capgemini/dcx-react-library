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
  isError
}: FormRadioCheckboxProps & {
  onChange?: (event: React.ChangeEvent, conditional?: string) => void;
  isError?: boolean;
}) => {
  const errorClasses = isError ? {
    container: 'dcx-checkbox-container--error',
    checkbox: 'dcx-checkbox-checkbox--error',
    label: 'dcx-checkbox-label--error'
  } : {
    container: '',
    checkbox: '',
    label: ''
  };
   return (
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
    itemClassName={`${itemClassName} ${errorClasses.container}`}
    inputClassName={`${inputClassName} ${errorClasses.checkbox}`}
    labelClassName={`${labelClassName} ${errorClasses.label}`}
      />
    )
  }
