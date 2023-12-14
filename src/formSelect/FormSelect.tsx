/* eslint-disable no-console */
import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
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
import { OptionGroupProps } from '../common/components/OptionGroup';
import { OptionProps } from '../common/components/Option';
import {
  OptionWithIcon,
  OptionWithIconProps,
} from '../common/components/OptionWithIcon';

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
   * specify border style for select and list
   */
  border?: string;
  /**
   * option items text color
   */
  itemTextColor?: string;
  /**
   * option disabled item text  color
   */
  itemDisabledTextColor?: string;
  /**
   * option group tile background color
   */
  groupTilteBackgroundColor?: string;
  /**
   * option items background color
   */
  itemBackgroundColor?: string;
  /**
   * specify option items hover background color
   */
  itemHoverBackgroundColor?: string;
  /**
   * indicate the total number of options you wish to appear in the option dropdown list.
   */
  listItemsCountToShow?: number;
  /**
   * sepecify font family for select.
   */
  fontFamily?: string;
  /**
   * sepecify font size for select.
   */
  fontSize?: string;
  /**
   * specify width for select.
   */
  selectWidth?: string;
  /**
   * specify style for select contain icon.
   */
  selectStyle?: any;
  /**
   * specify style for list contain icon.
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
   * itemBackgroundColor properties: string
   * groupTilteBackgroundColor properties: string
   * itemDisabledTextColor properties: string
   * itemTextColor properties: string
   * border properties: string
   * fontFamily properties: string
   * fontSize properties: string
   * selectWidth properties: string
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
  options?: OptionWithIconProps[] | string[];
  /**
   * select groups
   */
  optionGroups?: OptionGroupProps[];
  /**
   * handle the change when the user select the option
   */
  onChange?: (evt: string | ChangeEvent<HTMLSelectElement>) => void;
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
  options,
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
  defaultValue,
  tabIndex = 0,
  variant = 'normal',
  disabled = false,
  selectProps,
}: FormSelectProps) => {
  const initialValue: string | number =
    value ||
    nullOption ||
    (options &&
      options.length > 0 &&
      (typeof options[0] === 'string'
        ? options[0]
        : (options[0] as OptionProps).value)) ||
    '';
  const [selectValue, setSelectValue] = useState<string | number>(initialValue);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const menuRef = useRef(null);
  const getUniqueId = () => Math.floor(Math.random() * 1000000000);
  const optionItemStyle = {
    itemTextColor: selectIconProps && selectIconProps.itemTextColor,
    itemBackgroundColor: selectIconProps && selectIconProps.itemBackgroundColor,
    itemDisabledTextColor:
      selectIconProps && selectIconProps.itemDisabledTextColor,
    itemHoverBackgroundColor:
      selectIconProps && selectIconProps.itemHoverBackgroundColor,
    groupTilteBackgroundColor:
      selectIconProps && selectIconProps.groupTilteBackgroundColor,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [menuRef]);

  let theOptions = options
    ? (options.map((option: OptionWithIconProps | string) => {
        if (typeof option === 'object' && option.icon) {
          return {
            ...option,
            iconStyle: selectIconProps && selectIconProps.iconStyle,
            ...optionItemStyle,
          };
        }
        if (typeof option === 'object' && !option.icon) {
          return {
            ...option,
            ...optionItemStyle,
          };
        }
        return option;
      }) as OptionProps[])
    : [];

  let theOptionGroups = optionGroups
    ? optionGroups.map((OptionGroup: OptionGroupProps) => {
        OptionGroup.options = OptionGroup.options.map(
          (option: OptionWithIconProps | string) => {
            if (typeof option === 'object' && option.icon) {
              return {
                ...option,
                iconStyle: selectIconProps && selectIconProps.iconStyle,
                ...optionItemStyle,
              };
            }
            return {
              ...(option as OptionProps),
              ...optionItemStyle,
            };
          }
        ) as OptionProps[];
        return OptionGroup;
      })
    : [];

  const getOptions = (options: OptionProps[] | string[]): JSX.Element[] =>
    options.map((item: OptionProps | string) => {
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
      return <Option key={getUniqueId()} {...convertedItem} />;
    });

  const getOptionGroups = (optionGroups: OptionGroupProps[]): JSX.Element[] =>
    optionGroups.map((groupOption: OptionGroupProps) => (
      <OptionGroup key={getUniqueId()} {...groupOption} />
    ));

  const getOptionsWithIcon = (options: OptionProps[]): JSX.Element[] =>
    options.map((item: OptionWithIconProps) => (
      <OptionWithIcon
        key={getUniqueId()}
        {...item}
        itemTextColor={selectIconProps && selectIconProps.itemTextColor}
        itemBackgroundColor={
          selectIconProps && selectIconProps.itemBackgroundColor
        }
        itemDisabledTextColor={
          selectIconProps && selectIconProps.itemDisabledTextColor
        }
        itemHoverBackgroundColor={
          selectIconProps && selectIconProps.itemHoverBackgroundColor
        }
        groupTilteBackgroundColor={
          selectIconProps && selectIconProps.groupTilteBackgroundColor
        }
      />
    ));

  const getOptionGroupsWithIcon = (
    optionGroups: OptionGroupProps[]
  ): JSX.Element[] =>
    optionGroups.flatMap((groupOption: OptionGroupProps, index: number) => [
      <OptionWithIcon
        id={`groupTitle${index}`}
        key={getUniqueId()}
        value={
          groupOption.displayCount
            ? `${groupOption.label} (${groupOption.options.length})`
            : groupOption.label
        }
        itemTextColor={selectIconProps && selectIconProps.itemTextColor}
        itemBackgroundColor={
          selectIconProps && selectIconProps.itemBackgroundColor
        }
        itemDisabledTextColor={
          selectIconProps && selectIconProps.itemDisabledTextColor
        }
        itemHoverBackgroundColor={
          selectIconProps && selectIconProps.itemHoverBackgroundColor
        }
        groupTilteBackgroundColor={
          selectIconProps && selectIconProps.groupTilteBackgroundColor
        }
        isGroupTitle
      />,
      ...groupOption.options.map((item: OptionWithIconProps) => (
        <OptionWithIcon key={getUniqueId()} {...item} />
      )),
    ]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.currentTarget.value);
    if (onChange) onChange(event);
  };

  const isIncludeIcon = () =>
    theOptions.some(
      (value) => typeof value === 'object' && Object.hasOwn(value, 'icon')
    ) ||
    (theOptionGroups &&
      theOptionGroups.some((value) =>
        value.options.some(
          (theValue) =>
            typeof theValue === 'object' && Object.hasOwn(theValue, 'icon')
        )
      ));

  const TheSelect = () => (
    <select
      defaultValue={
        defaultValue && defaultValue !== '' ? defaultValue : selectValue
      }
      name={name || 'formSelect'}
      id={id || 'formSelect'}
      className={selectClassName}
      aria-label={ariaLabel || Roles.list}
      onChange={handleChange}
      style={style}
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

    if (theOptionGroups && theOptionGroups.length) {
      theOptionGroups.find((optionGroup) => {
        selectedOption = optionGroup.options.find(
          (option) => option.value === selectValue
        );
        return selectedOption;
      });
    }

    return (
      <>
        {isIncludeIcon() ? (
          <div
            style={{ width: selectIconProps && selectIconProps.selectWidth }}
          >
            <div
              onClick={() =>
                !disabled && setShowOptions((currState: boolean) => !currState)
              }
              style={{
                width: '100%',
                display: 'flex',
                cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
                opacity: `${disabled ? '0.5' : '1'}`,
                padding: '4px 0px',
                alignItems: 'center',
                justifyContent: 'space-between',
                color:
                  (selectIconProps && selectIconProps.itemTextColor) || 'black',
                backgroundColor:
                  (selectIconProps && selectIconProps.itemBackgroundColor) ||
                  'white',
                fontSize: `${selectIconProps && selectIconProps.fontSize}`,
                fontFamily: `${selectIconProps && selectIconProps.fontFamily}`,
                border: `${
                  (selectIconProps && selectIconProps.border) ||
                  '1px solid #747d8c'
                }`,
                ...(selectIconProps && selectIconProps.selectStyle),
              }}
              ref={menuRef}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                {selectedOption &&
                  (selectedOption as OptionWithIconProps).icon && (
                    <img
                      alt="selected icon"
                      height={
                        selectIconProps &&
                        selectIconProps.iconStyle &&
                        selectIconProps.iconStyle.height
                      }
                      src={
                        selectedOption &&
                        (selectedOption as OptionWithIconProps).icon
                      }
                      width={`calc(${
                        selectIconProps &&
                        selectIconProps.iconStyle &&
                        selectIconProps.iconStyle.width
                      } + 10px)`}
                      style={{
                        paddingLeft: '10px',
                      }}
                    />
                  )}
                <span
                  style={{
                    ...(!(selectedOption as OptionWithIconProps)?.icon && {
                      paddingLeft: '10px',
                    }),
                  }}
                >
                  {(selectedOption as OptionProps)?.value || nullOption}
                </span>
              </div>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 1024 1024"
                data-testid="arrow down icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M705.6 376.2L512 569.8 318.5 376.2 266.7 428 512 673.2 757.3 428z"
                  fill={`${
                    (selectIconProps && selectIconProps.itemTextColor) ||
                    'black'
                  }`}
                />
              </svg>
            </div>
            {showOptions && (
              <div
                style={{
                  width: '100%',
                  overflowY: 'auto',
                  fontSize: `${selectIconProps && selectIconProps.fontSize}`,
                  fontFamily: `${
                    selectIconProps && selectIconProps.fontFamily
                  }`,
                  ...(selectIconProps &&
                    selectIconProps.listItemsCountToShow && {
                      height: `calc(${
                        selectIconProps && selectIconProps.listItemsCountToShow
                      } * 24px)`,
                    }),
                  border: `${
                    (selectIconProps && selectIconProps.border) ||
                    '1px solid #747d8c'
                  }`,
                  ...(selectIconProps && selectIconProps.listStyle),
                }}
                ref={menuRef}
                onClick={(e) => {
                  const target = e.target as
                    | HTMLImageElement
                    | HTMLParagraphElement;
                  const isDisabled = target.dataset.disable;
                  const isGroupTitle = target.dataset.isGroupTitle;
                  const value =
                    (target as HTMLImageElement).alt || target.innerHTML;

                  if (isDisabled === 'true' || isGroupTitle === 'true') return;
                  if (onChange) onChange(value);

                  setSelectValue(value);
                  setShowOptions((currState) => !currState);
                }}
              >
                {theOptions &&
                  !theOptionGroups.length &&
                  getOptionsWithIcon(theOptions as OptionProps[])}
                {theOptionGroups &&
                  !theOptions.length &&
                  getOptionGroupsWithIcon(
                    theOptionGroups as OptionGroupProps[]
                  )}
              </div>
            )}
          </div>
        ) : (
          <TheSelect />
        )}
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
