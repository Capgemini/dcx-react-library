import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  MutableRefObject,
} from 'react';
import {
  ErrorMessage,
  OptionGroup,
  Hint,
  Option,
  Roles,
  Label,
  classNames,
} from '../common';
import {
  ErrorMessageProps,
  HintProps,
  VisuallyHidden,
} from '../common/components/commonTypes';
import { OptionProps } from '../common/components/Option';
import { OptionGroupProps } from '../common/components/OptionGroup';

export type iconStyle = {
  /**
   * icon width
   */
  width: string;
  /**
   * icon height
   */
  height: string;
  /**
   * icon border raduis
   */
  borderRadius: string;
};

export type selectIconProps = {
  /**
   * specify option items hover background color
   */
  itemHoverBackgroundColor?: string;
  /**
   * indicate the total number of options you wish to appear in the option dropdown list.
   */
  listItemsCountToShow?: number;
  /**
   * specify style for select contain icon
   */
  selectStyle?: any;
  /**
   * specify style for list contain icon
   */
  listStyle?: any;
  /**
   * specify a custom class name to be applied to the options icon
   * iconStyle properties: width, height, borderRadius
   */
  iconStyle?: iconStyle;
};

export type FormSelectProps = {
  /**
   * specify style for form select that contain icon
   * iconStyle properties: width, height, borderRadius
   * listStyle properties: any
   * selectStyle properties: any
   * listItemsCountToShow properties: number
   * itemHoverBackgroundColor properties: string
   */
  selectIconProps?: selectIconProps;
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
   * specify a custom class name to be applied to the full container when there's an error
   */
  containerErrorClassName?: string;
  /**
   * specify a custom class name to be applied to the full container when the select has a value selected
   */
  containerFilledClassName?: string;
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
   * if a variant floating is specified it will add a class 'dcx-floating-label' for supporting a floating label feature
   */
  variant?: 'floating' | 'normal';
  /**
   * will select the default value
   */
  defaultValue?: string;
  /**
   * provide an container props
   */
  containerProps?: any;
  /**
   * tab index value
   */
  tabIndex?: number;
  /**
   * will enable/disable the select
   */
  disabled?: boolean;
  /**
   * will allow to extend the select
   */
  selectProps?: React.AllHTMLAttributes<HTMLSelectElement>;
};

export const FormSelect = ({
  selectIconProps,
  selectClassName,
  labelClassName,
  containerClassName,
  containerErrorClassName,
  containerFilledClassName,
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
  tabIndex = 0,
  variant = 'normal',
  disabled = false,
  selectProps,
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
  const [showOptions, setShowOptions] = useState<Boolean>(false);
  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setShowOptions(false));

  let theOptions: OptionProps[] | string[] =
    options && options.length
      ? (options.map((option: OptionProps | string) => {
          if (typeof option === 'object' && option.icon) {
            return {
              ...option,
              ...{ iconStyle: selectIconProps?.iconStyle },
              itemHoverBackgroundColor:
                selectIconProps?.itemHoverBackgroundColor,
            };
          }
          return option;
        }) as OptionProps[])
      : [];

  let theOptionGroups =
    optionGroups && optionGroups.length
      ? optionGroups.map((OptionGroup: OptionGroupProps) => {
          OptionGroup.options = OptionGroup.options.map(
            (option: OptionProps | string) => {
              if (typeof option === 'object' && option.icon) {
                return {
                  ...option,
                  ...{ iconStyle: selectIconProps?.iconStyle },
                  itemHoverBackgroundColor:
                    selectIconProps?.itemHoverBackgroundColor,
                };
              }
              return option;
            }
          ) as OptionProps[];
          return OptionGroup;
        })
      : [];

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
    setShowOptions((curState) => !curState);
    setSelectValue(event.currentTarget.value);
    if (onChange) onChange(event);
  };

  const isIncludeIcon = () => {
    for (const [, value] of Object.entries(theOptions)) {
      if (typeof value === 'object' && Object.hasOwn(value, 'icon'))
        return true;
    }
    if (theOptionGroups) {
      for (const [, value] of Object.entries(theOptionGroups)) {
        for (const [, theValue] of Object.entries(value.options)) {
          if (typeof theValue === 'object' && Object.hasOwn(theValue, 'icon'))
            return true;
        }
      }
    }
    return false;
  };

  const totalOptions = () => {
    let total = 0;
    if (theOptionGroups) {
      for (const optionGroup of theOptionGroups) {
        total += optionGroup.options.length;
      }
    }
    if (options.length > 0) {
      total += options.length;
    }
    return total;
  };

  const TheSelect = () => (
    <select
      value={defaultValue !== '' ? defaultValue : selectValue}
      name={name || 'formSelect'}
      id={id || 'formSelect'}
      className={selectClassName}
      aria-label={ariaLabel || Roles.list}
      onChange={handleChange}
      style={{ ...style, ...selectIconProps?.listStyle }}
      size={
        isIncludeIcon()
          ? totalOptions() > Number(selectIconProps?.listItemsCountToShow)
            ? Number(selectIconProps?.listItemsCountToShow) >= 2
              ? Number(selectIconProps?.listItemsCountToShow)
              : 2
            : totalOptions()
          : 1
      }
      tabIndex={tabIndex}
      disabled={disabled}
      ref={menuRef}
      {...selectProps}
    >
      {nullOption && <Option value="" label={nullOption} />}
      {getOptions(theOptions)}
      {theOptionGroups && getOptionGroups(theOptionGroups)}
    </select>
  );

  const Select = () => {
    let selectedOption = theOptions.find((option: OptionProps | string) => {
      if (typeof option === 'object') {
        return option.value === selectValue;
      }
      return option === selectValue;
    });

    if (theOptionGroups?.length) {
      theOptionGroups!.find((optionGrouo) => {
        selectedOption = optionGrouo.options.find((option) => {
          if (typeof option === 'object') {
            return option.value === selectValue;
          }
          return option === selectValue;
        });
        return selectedOption;
      });
    }

    return (
      <>
        {isIncludeIcon() ? (
          <div
            onClick={() => setShowOptions((currState) => !currState)}
            style={{
              display: 'flex',
              padding: '4px 0px 4px 10px',
              alignItems: 'center',
              justifyContent: 'space-between',
              ...selectIconProps?.selectStyle,
            }}
            ref={menuRef}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {selectedOption && (selectedOption as OptionProps).icon && (
                <img
                  src={(selectedOption as OptionProps)?.icon}
                  width={selectIconProps?.iconStyle?.width}
                  height={selectIconProps?.iconStyle?.height}
                  alt="selected icon"
                />
              )}
              <span>
                {(selectedOption as OptionProps)?.label || nullOption}
              </span>
            </div>
            <img
              src={'/arrow-down.svg'}
              width="20px"
              height="20px"
              alt="arrow down icon"
            />
          </div>
        ) : null}
        {isIncludeIcon() && showOptions ? <TheSelect /> : null}
        {!isIncludeIcon() ? <TheSelect /> : null}
      </>
    );
  };

  const containerClasses = classNames([
    'dcx-formselect',
    containerClassName,
    {
      [`dcx-formselect--error ${containerErrorClassName}`]:
        errorMessage !== undefined,
      'dcx-floating-label': variant === 'floating',
      [`dcx-formselect--filled ${containerFilledClassName}`]:
        selectValue && selectValue !== nullOption,
    },
  ]);

  return (
    <div className={containerClasses} {...containerProps}>
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
      <Select />
    </div>
  );
};

function useOutsideClick(
  ref: MutableRefObject<null | HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node)
      ) {
        // eslint-disable-next-line callback-return
        callback();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, callback]);
}
