import React, { useState } from 'react';
import { CheckboxRadioBase, ErrorMessage, Hint, Legend } from '../components';
import {
  ErrorMessageProps,
  FormRadioCheckboxProps,
  HintProps,
  LegendProps,
} from '../components/commonTypes';
import { FormCheckbox } from '../../formCheckbox';

type DividerProps = {
  /**
   * divider text
   **/
  text: string;
  /**
   * class name to customise divider
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
  type: 'radio' | 'checkbox';
  /**
   * form group items
   */
  items: (FormRadioCheckboxProps | DividerProps | string)[];
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
   * form group input class name
   */
  inputClassName?: string;
  /**
   * form group item class name
   */
  itemClassName?: string;
  /**
   * form group label class name
   */
  labelClassName?: string;
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
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * form group item properties for all items
   */
  itemProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * form group items class names
   */
  itemsClasses?: string;
  /**
   * form group label properties for all items
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * form group legend properties
   */
  legend?: LegendProps;
  /**
   * function that will trigger all the time there's a change of choice
   */
  onChange?: (
    event: React.FormEvent<HTMLInputElement>,
    conditionalInput?: string
  ) => void;
};

type SelectionItem = FormRadioCheckboxProps | DividerProps | string;

const isDivider = (item: SelectionItem): item is DividerProps =>
  typeof item !== 'string' &&
  (item as FormRadioCheckboxProps).label === undefined;

const isString = (item: SelectionItem): item is string =>
  typeof item === 'string';

export const FormRadioCheckboxBase = ({
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
  inputClassName,
  itemClassName,
  labelClassName,
  labelProps,
  legend,
  onChange,
}: FormGroupProps) => {
  const findSelection = (
    items: (FormRadioCheckboxProps | DividerProps | string)[]
  ) => {
    let newSelection: { [key: string]: boolean } = {};
    items.forEach((item: FormRadioCheckboxProps | DividerProps | string) => {
      if ((item as FormRadioCheckboxProps).selected) {
        newSelection = {
          ...newSelection,
          [(item as FormRadioCheckboxProps).id]: true,
        };
      } else {
        newSelection = {
          ...newSelection,
          [(item as FormRadioCheckboxProps).id]: false,
        };
      }
    });
    return newSelection;
  };

  const [selection, setSelection] = useState<{ [key: string]: boolean }>(
    findSelection(items)
  );

  const handleChange = (
    item: FormRadioCheckboxProps | string,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    if (type === 'radio') {
      let newSelection: { [key: string]: boolean } = {};

      items.forEach((item) => {
        newSelection[(item as FormRadioCheckboxProps).id] =
          (item as FormRadioCheckboxProps).id === e.currentTarget.id
            ? e.currentTarget.checked
            : false;
      });

      setSelection(newSelection);
    } else {
      setSelection({
        ...selection,
        [isString(item) ? item : item.id]: e.currentTarget.checked,
      });
    }

    if (onChange) {
      onChange(e);
    }
  };

  const isSelected = (item: SelectionItem) =>
    Object.keys(selection).some(
      (key) =>
        key === (item as FormRadioCheckboxProps | DividerProps).id &&
        selection[key] === true
    );

  const formGroupItems = items.map((item: SelectionItem, index: number) => {
    if (isDivider(item)) {
      return (
        <div
          key={`${id}_${index.toString()}`}
          id={item.id}
          className={item.className}
        >
          {item.text}
        </div>
      );
    }

    if (isString(item)) {
      return (
        <CheckboxRadioBase
          id={item}
          type={type}
          key={`${id}_${index.toString()}`}
          name={name}
          inputProps={{ ...inputProps }}
          itemProps={{ ...itemProps }}
          labelProps={{ ...labelProps }}
          inputClassName={inputClassName}
          labelClassName={labelClassName}
          itemClassName={itemClassName}
          label={item}
          value={item}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(item, event);
          }}
        />
      );
    }

    if (type === 'radio') {
      return (
        <CheckboxRadioBase
          type={type}
          key={`${id}_${index.toString()}`}
          {...item}
          name={name}
          inputProps={{ ...inputProps, ...item.inputProps }}
          itemProps={{ ...itemProps, ...item.itemProps }}
          labelProps={{ ...labelProps, ...item.labelProps }}
          inputClassName={inputClassName}
          labelClassName={labelClassName}
          itemClassName={itemClassName}
          selected={isSelected(item)}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            conditionalInput?: string
          ) => {
            if (conditionalInput && onChange) {
              onChange(event, conditionalInput);
              return;
            }

            handleChange(item, event);
          }}
        />
      );
    }

    if (type === 'checkbox') {
      return (
        <FormCheckbox
          key={`${id}_${index.toString()}`}
          {...item}
          name={name}
          inputProps={{ ...inputProps, ...item.inputProps }}
          itemProps={{ ...itemProps, ...item.itemProps }}
          labelProps={{ ...labelProps, ...item.labelProps }}
          inputClassName={inputClassName}
          labelClassName={labelClassName}
          itemClassName={itemClassName}
          selected={isSelected(item)}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement>,
            conditionalInput?: string
          ) => {
            if (conditionalInput && onChange) {
              onChange(event, conditionalInput);
              return;
            }

            handleChange(item, event);
          }}
        />
      );
    }

    return null;
  });

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
    <div>Can not render a {type} group with less than 2 items</div>
  );
};
