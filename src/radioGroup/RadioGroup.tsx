import React from 'react';
import { FormRadioCheckboxBaseProps } from '../common/components/commonTypes';
import { FormRadioCheckboxBase } from '../common/components/FormRadioCheckboxBase';
import { classNames } from '../common/utils';

export const RadioGroup = ({
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
    { 'dcx-radio-button-group': true },
    { 'dcx-radio-button-group--error': !!error },
  ]);

  const containerRadioButtonsClasses = classNames([
    itemsClasses,
    'dcx-radio-button-group-radios',
  ]);

  return (
    <FormRadioCheckboxBase
      {...{
        type: 'radio',
        name,
        items,
        ariaDescribedBy,
        groupClasses: containerClasses,
        error,
        fieldsetClasses,
        hint: hint,
        id,
        inputProps,
        itemProps,
        itemsClasses: containerRadioButtonsClasses,
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
