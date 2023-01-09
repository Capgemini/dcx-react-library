import React from 'react';
import { FormRadioCheckboxBaseProps } from '../common/components/commonTypes';
import { FormRadioCheckboxBase } from '../common/components/FormRadioCheckboxBase';

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
}: Omit<FormRadioCheckboxBaseProps, 'type'>) => (
  <FormRadioCheckboxBase
    {...{
      type: 'radio',
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
    }}
  />
);
