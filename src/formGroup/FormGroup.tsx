import React, { useState } from 'react';
import {
  CheckboxRadioBase,
  ErrorMessage,
  Hint,
  Legend,
} from '../common/components';
import {
  ErrorMessageProps,
  FormRadioCheckboxProps,
  HintProps,
  LegendProps,
} from '../common/components/commonTypes';

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
  type: 'radio' | 'checkbox';
  /**
   * form group items
   */
  items: (FormRadioCheckboxProps | DividerProps)[];
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
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

type SelectionItem = FormRadioCheckboxProps | DividerProps;

const isDivider = (item: SelectionItem): item is DividerProps =>
  (item as FormRadioCheckboxProps).label === undefined;

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
  const findSelection = (items: (FormRadioCheckboxProps | DividerProps)[]) => {
    let newSelection: { [key: string]: boolean } = {};
    items.forEach((item: FormRadioCheckboxProps | DividerProps) => {
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
    item: FormRadioCheckboxProps,
    type: string,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    if (type === 'checkbox') {
      setSelection({ ...selection, [item.id]: e.currentTarget.checked });
    } else {
      let newSelection = {};
      items.forEach((item: FormRadioCheckboxProps | DividerProps) => {
        if (item.id === e.currentTarget.id) {
          newSelection = {
            ...newSelection,
            [(item as FormRadioCheckboxProps).id]: e.currentTarget.checked,
          };
        } else {
          newSelection = {
            ...newSelection,
            [(item as FormRadioCheckboxProps).id]: false,
          };
        }
      });
      setSelection(newSelection);
    }

    if (item.onChange) item.onChange(e);
    if (onChange) onChange(e);
  };

  const isSelected = (item: SelectionItem) =>
    Object.keys(selection).some(
      key => key === item.id && selection[key] === true
    );

  const formGroupItems = items.map((item: SelectionItem, index: number) =>
    isDivider(item) ? (
      <div
        key={`${id}_${index.toString()}`}
        id={item.id}
        className={item.className}
      >
        {item.text}
      </div>
    ) : type === 'radio' || type === 'checkbox' ? (
      <CheckboxRadioBase
        type={type}
        key={`${id}_${index.toString()}`}
        {...item}
        name={name}
        inputProps={{ ...inputProps, ...item.inputProps }}
        itemProps={{ ...itemProps, ...item.itemProps }}
        labelProps={{ ...labelProps, ...item.labelProps }}
        selected={isSelected(item)}
        onChange={e => handleChange(item, type, e)}
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
