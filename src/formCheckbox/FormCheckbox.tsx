import React from 'react';
import { FormRadioCheckboxProps } from '../common/components/commonTypes';
import { CheckboxRadioBase, Roles } from '../common';
import { classNames } from '../common/utils';

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
  isError,
}: FormRadioCheckboxProps & {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    conditional?: string
  ) => void;
  isError?: boolean;
}) => {
  const containerClasses = classNames([
    itemClassName,
    'dcx-checkbox',
    { 'dcx-checkbox--error': isError },
  ]);

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
      itemClassName={containerClasses}
      inputClassName={inputClassName}
      labelClassName={labelClassName}
    />
  );
};
