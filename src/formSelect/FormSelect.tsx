import React, { useState, ChangeEvent } from 'react';
import {
  ErrorMessage,
  OptionGroup,
  Hint,
  Option,
  Roles,
  Label,
} from '../common';
import {
  ErrorMessageProps,
  HintProps,
  VisuallyHidden,
} from '../common/components/commonTypes';
import { OptionProps } from '../common/components/Option';
import { OptionGroupProps } from '../common/components/OptionGroup';

export type FormSelectProps = {
  /**
   * specify a custom class name to be applied to the form-select
   */
  selectClassName?: string;
  /**
   * specify a custom class name to be applied to the label
   */
  labelClassName?: string;
  /**
   * specify a custom class name to be applied to the full container
   */
  containerClassName?: string;
  /**
   * select options. The options can be:
   * an array of strings,
   * an array of objects with: `label` (mandatory), `value` (mandatory), `ariaLabel`, `className`, `disabled`, `id`, `labelClassName`
   */
  options?: OptionProps[] | string[];
  /**
   * select groups
   */
  optionGroups?: OptionGroupProps[];
  /**
   * handle the change when the user select the option
   */
  onChange?: (evt: ChangeEvent<HTMLSelectElement>) => void;
  /**
   * select name
   */
  name?: string;
  /**
   * select id
   */
  id?: string;
  /**
   * define the aria-label
   */
  ariaLabel?: string;
  /**
   * select label
   */
  label?: string;
  /**
   * select label properties for optional label
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * select label hint
   */
  hint?: HintProps;
  /**
   * select error
   */
  error?: ErrorMessageProps;
  /**
   * display an error message
   */
  errorMessage?: string;
  /**
   * specify a custom class name to be applied to the error message
   */
  errorMessageClassName?: string;
  /**
   * for accessibility, specify the role of the select element.
   * it provide text (mandatory) and className (optional)
   */
  errorMessageVisuallyHidden?: VisuallyHidden;
  /**
   * provide an id to the error message
   */
  errorMessageId?: string;
  /**
   * select style
   */
  style?: any;
  /**
   * you can add an option that will have the specified label but an empty value
   * nullOption will be selected by default
   */
  nullOption?: string;
  /**
   * select value which is programatically added by user
   */
  value?: number | string;
  /**
   * will select the default value
   */
  defaultValue?: string;
  /**
   * provide an container props
   */
   containerProps?: any;
};

export const FormSelect = ({
  selectClassName,
  labelClassName,
  containerClassName,
  name,
  optionGroups,
  options = [],
  onChange,
  value,
  id,
  ariaLabel,
  label,
  labelProps,
  hint,
  error,
  errorMessage,
  errorMessageClassName,
  errorMessageVisuallyHidden,
  errorMessageId,
  style,
  nullOption,
  containerProps,
  defaultValue = '',
}: FormSelectProps) => {
  let initialValue: string | number = '';

  if (value !== undefined) {
    initialValue = value;
  } else if (nullOption !== undefined) {
    initialValue = nullOption;
  } else if (options.length > 0 && typeof options[0] === 'string') {
    initialValue = options[0];
  } else if (options.length > 0) {
    initialValue = (options[0] as OptionProps).value;
  }

  const [selectValue, setSelectValue] = useState<string | number>(initialValue);
  const getOptions = (options: OptionProps[] | string[]): JSX.Element[] =>
    options.map((item: OptionProps | string, index: number) => {
      let convertedItem: OptionProps;
      // in case item is a string we need to convert it to an option
      if (typeof item === 'string') {
        convertedItem = {
          label: item,
          value: item,
        };
      } else {
        convertedItem = { ...item };
      }
      return <Option key={index} {...convertedItem} />;
    });

  const getOptionGroups = (optionGroups: OptionGroupProps[]): JSX.Element[] =>
    optionGroups.map((groupOption: OptionGroupProps, index: number) => (
      <OptionGroup key={index} {...groupOption} />
    ));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.currentTarget.value);
    if (onChange) onChange(event);
  };

  return (
    <div className={containerClassName} {...containerProps}>
      <Label
        label={label}
        labelProperties={labelProps}
        htmlFor={id}
        className={labelClassName}
      />
      {hint && <Hint {...hint} />}
      {error && <ErrorMessage {...error} />}
      {errorMessage && (
        <ErrorMessage
          text={errorMessage}
          className={errorMessageClassName}
          visuallyHiddenText={errorMessageVisuallyHidden}
          id={errorMessageId}
        />
      )}
      <select
        value={defaultValue !== '' ? defaultValue : selectValue}
        name={name || 'formSelect'}
        id={id || 'formSelect'}
        className={selectClassName}
        aria-label={ariaLabel || Roles.list}
        onChange={handleChange}
        style={style}
      >
        {nullOption && <Option value="" label={nullOption} />}
        {getOptions(options)}
        {optionGroups && getOptionGroups(optionGroups)}
      </select>
    </div>
  );
};
