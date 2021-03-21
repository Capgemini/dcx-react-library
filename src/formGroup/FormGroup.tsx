import React from 'react';
import { Roles } from '../common';
import {
  ErrorMessage,
  ErrorMessageProps,
  Hint,
  HintProps,
  Legend,
  LegendProps,
} from '../common/components';
import { FormRadio, FormRadioProps } from '../formRadio/index';

type FormGroupProps = {
  /**
   * form group name
   */
  name: string;
  /**
   * form group items
   */
  items: FormRadioProps[];
  /**
   * form group aria-describedby
   */
  ariaDescribedBy?: string;
  /**
   * form group class names
   */
  groupClasses?: string;
  /**
   * form group error
   */
  error?: ErrorMessageProps;
  /**
   * form group fieldset class names
   */
  fieldsetClasses?: string;
  /**
   * form group hint
   */
  hint?: HintProps;
  /**
   * form group id
   */
  id?: string;
  /**
   * form group items class names
   */
  itemsClasses?: string;
  /**
   * form group legend properties
   */
  legend?: LegendProps;
  /**
   * function that will trigger all the time there's a change of choice
   */
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
};

export const FormGroup = ({
  name,
  items,
  ariaDescribedBy,
  groupClasses,
  error,
  fieldsetClasses,
  hint,
  id,
  itemsClasses,
  legend,
  onChange,
}: FormGroupProps) => {
  const formGroupItems = items.map((item: FormRadioProps, index: number) => (
    <FormRadio
      key={`${id}_${index.toString()}`}
      {...item}
      inputProps={{ ...item.inputProps, name, onChange }}
    />
  ));

  return (
    <div id={id} className={groupClasses} role={Roles.formGroup}>
      <fieldset
        className={fieldsetClasses}
        aria-describedby={ariaDescribedBy || ''}
      >
        {legend && <Legend {...legend} />}
        {hint && <Hint {...hint} />}
        {error && <ErrorMessage {...error} />}
        <div className={itemsClasses}>{formGroupItems}</div>
      </fieldset>
    </div>
  );
};
