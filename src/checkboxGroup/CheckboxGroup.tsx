import React from 'react';
import { FormRadioCheckboxBaseProps } from '../common/components/commonTypes';
import { FormRadioCheckboxBase } from '../common/components/FormRadioCheckboxBase';
import { classNames } from '../common/utils';

export const CheckboxGroup = ({
  name,
  items,
  ariaDescribedBy,
  groupClasses,
  error,
  fieldsetClasses,
  hint,
  id,
  inputProps,
  itemProps,
  itemsClasses,
  inputClassName,
  itemClassName,
  labelClassName,
  labelProps,
  legend,
  onChange,
}: Omit<FormRadioCheckboxBaseProps, 'type'>) => {
  const containerClasses = classNames([
    groupClasses,
    { 'dcx-checkbox-group': true },
    { 'dcx-checkbox-group--error': !!error },
  ]);

  const containerCheckboxesClasses = classNames([
    itemsClasses,
    'dcx-checkbox-group-checkboxes',
  ]);

  return (
    <FormRadioCheckboxBase
      {...{
        type: 'checkbox',
        name,
        items,
        ariaDescribedBy,
        groupClasses: containerClasses,
        error,
        fieldsetClasses,
        hint,
        id,
        inputProps,
        itemProps,
        itemsClasses: containerCheckboxesClasses,
        inputClassName,
        itemClassName,
        labelClassName,
        labelProps,
        legend,
        onChange,
      }}
    />
  );
};
