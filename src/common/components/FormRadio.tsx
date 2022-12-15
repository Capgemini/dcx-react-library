import React from 'react';
import { FormRadioCheckboxBaseProps } from '../components/commonTypes';
import { FormRadioCheckboxBase } from './FormRadioCheckboxBase';

export const FormRadio = ({
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
