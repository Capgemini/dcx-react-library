import React, { useState } from 'react';
import {
  ErrorMessage,
  ErrorMessageProps,
  FormRadioProps,
  Hint,
  HintProps,
  Legend,
  LegendProps,
} from '../common/components';
import { FormRadio } from '../formRadio/index';

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
   * form group items
   */
  items: (FormRadioProps | DividerProps)[];
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
  const findSelection = (items: (FormRadioProps | DividerProps)[]) =>
    items.find(
      (item: FormRadioProps | DividerProps) => (item as FormRadioProps).selected
    );

  const [selection, setSelection] = useState(
    (findSelection(items) as FormRadioProps)?.value
  );

  const isDivider = (
    item: DividerProps | FormRadioProps
  ): item is DividerProps => (item as FormRadioProps).label === undefined;

  const formGroupItems = items.map(
    (item: DividerProps | FormRadioProps, index: number) =>
      isDivider(item) ? (
        <div
          key={`${id}_${index.toString()}`}
          id={item.id}
          className={item.className}
        >
          {item.text}
        </div>
      ) : (
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
            item.onChange(e);

            if (onChange) onChange(e);
          }}
        />
      )
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
