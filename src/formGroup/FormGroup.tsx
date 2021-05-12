import React, { useState } from 'react';
import { ErrorMessage, Hint, Legend } from '../common/components';
import {
  ErrorMessageProps,
  FormRadioProps,
  FormCheckboxProps,
  HintProps,
  LegendProps,
} from '../common/components/commonTypes';
import { FormRadio } from '../formRadio/index';
import { FormCheckbox } from '../formCheckbox/index';

type DividerProps = {
  /**
   * divider text
   **/
  text: string;
  /**
   * class names to customise divider
   **/
  className?: string;
  /**
   * divider id
   **/
  id?: string;
};

type FormGroupProps = {
  /**
   * form group name
   */
  name: string;
  /**
   * form item type can be "radio" or "checkbox"
   */
  type: string;
  /**
   * form group items
   */
  items: (FormCheckboxProps | FormRadioProps | DividerProps)[];
  /**
   * form group aria-describedby
   */
  ariaDescribedBy?: string;
  /**
   * form group error
   */
  error?: ErrorMessageProps;
  /**
   * form group fieldset class names
   */
  fieldsetClasses?: string;
  /**
   * form group class names
   */
  groupClasses?: string;
  /**
   * form group hint
   */
  hint?: HintProps;
  /**
   * form group id
   */
  id?: string;
  /**
   * form group input properties for all items
   */
  inputProps?: any;
  /**
   * form group item properties for all items
   */
  itemProps?: any;
  /**
   * form group items class names
   */
  itemsClasses?: string;
  /**
   * form group label properties for all items
   */
  labelProps?: any;
  /**
   * form group legend properties
   */
  legend?: LegendProps;
  /**
   * function that will trigger all the time there's a change of choice
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const FormGroup = ({
  name,
  type,
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
  labelProps,
  legend,
  onChange,
}: FormGroupProps) => {
  const findSelection = (
    items: (FormCheckboxProps | FormRadioProps | DividerProps)[]
  ) =>
    items.find(
      (item: FormCheckboxProps | FormRadioProps | DividerProps) =>
        (item as FormRadioProps | FormCheckboxProps).selected
    );

  const [selection, setSelection] = useState(
    type === 'radio'
      ? (findSelection(items) as FormRadioProps)?.value
      : type === 'checkbox'
      ? (findSelection(items) as FormCheckboxProps)?.selected
      : null
  );

  const isDivider = (
    item: DividerProps | FormCheckboxProps | FormRadioProps
  ): item is DividerProps =>
    (item as FormRadioProps | FormCheckboxProps).label === undefined;

  const formGroupItems = items.map(
    (item: DividerProps | FormCheckboxProps | FormRadioProps, index: number) =>
      isDivider(item) ? (
        <div
          key={`${id}_${index.toString()}`}
          id={item.id}
          className={item.className}
        >
          {item.text}
        </div>
      ) : type === 'radio' ? (
        <FormRadio
          key={`${id}_${index.toString()}`}
          {...item}
          name={name}
          inputProps={{ ...inputProps, ...item.inputProps }}
          itemProps={{ ...itemProps, ...item.itemProps }}
          labelProps={{ ...labelProps, ...item.labelProps }}
          selected={selection === item.value}
          onChange={e => {
            setSelection(e.currentTarget.value);
            if (item.onChange) item.onChange(e);
            if (onChange) onChange(e);
          }}
        />
      ) : type === 'checkbox' ? (
        <FormCheckbox
          key={`${id}_${index.toString()}`}
          {...item}
          name={name}
          inputProps={{ ...inputProps, ...item.inputProps }}
          itemProps={{ ...itemProps, ...item.itemProps }}
          labelProps={{ ...labelProps, ...item.labelProps }}
          selected={item.selected}
          value={item.value}
          onChange={e => {
            setSelection(e.currentTarget.defaultChecked);
            if (item.onChange) item.onChange(e);
            if (onChange) onChange(e);
          }}
        />
      ) : null
  );

  return items && items.length > 1 ? (
    <div id={id} className={groupClasses}>
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
  ) : (
    <div>Can not render a Form Group with less than 2 items</div>
  );
};
