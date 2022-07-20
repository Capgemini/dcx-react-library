import React, { useState } from 'react';
import { FormInput } from '../formInput';
import { FormSelect } from '../formSelect';
import { ErrorMessage, Hint, Roles, useHydrated } from '../common';
import { MultiSelectOption } from '../multiSelect/Types';
import { ResultList } from './ResultList';
import { Selected } from '../multiSelect/components/Selected';
import { SelectedItem } from '../multiSelect/components/SelectedItem';
import { debounce } from 'lodash';
import { VisuallyHidden } from '../common/components/commonTypes';

type autocompleteProps = {
  /**
   * you need to provide a list of values to filter
   */
  options: string[];
  /**
   * list of selected options for multi select
   */
  selected?: MultiSelectOption[];
  /**
   * specify the number of character to press before the option are displayed
   */
  minCharsBeforeSearch?: number;
  /**
   * will allow to delay the filter results (the value is in ms)
   */
  debounceMs?: number;
  /**
   * will pass the default value
   */
  defaultValue?: string;
  /**
   * you can specify a description label to provide additional information
   */
  hintText?: string;
  /**
   * allow to specify extra properties on the input
   */
  inputProps?: any;
  /**
   * you can style the look and feel of your hint text
   */
  hintClass?: string;
  /**
   * if you want to pass extra properties
   */
  props?: any;
  /**
   * if you want to style your input passing extra properties (e.g. search icon etc)
   */
  suffix?: any;
  /**
   * if you want to style your input passing extra properties (e.g. search icon etc)
   */
  prefix?: any;
  /**
   * if you want to pass an id to the result UL list
   */
  resultId?: string;
  /**
   * if you want to pass a style class to the result UL list
   */
  resultUlClass?: string;
  /**
   * if you want to pass a style class to the result UL container
   */
  resultUlStyle?: React.CSSProperties;
  /**
   * if you want to pass a style class to the result LI list (it will automatically add --odd,--even to the className to help you style the alternating rows)
   */
  resultlLiClass?: string;
  /**
   * if you want to pass a style class to the result UL container
   */
  resultLiStyle?: React.CSSProperties;
  /**
   * if you want to pass a style class to no result list
   */
  resultNoOptionClass?: string;
  /**
   * if you want to style the element selected in the result list
   */
  resultActiveClass?: string;
  /**
   * if you want to style the on remove all element
   */
  removeAllButtonClass?: string;
  /**
   * if you want to style the selected list item
   */
  selectedListItemStyle?: React.CSSProperties;
  /**
   * if you want to style the search element
   */
  searchContainerStyle?: React.CSSProperties;
  /**
   * optional multi select flag
   */
  multiSelect?: boolean;
  /**
   * optional text for not found element
   */
  notFoundText?: string;
  /**
   * event that return the selected value{}
   */
  onSelected?: (value: string) => void;
  /**
   * this method is useful if you want to provide the options dynamically
   */
  onChange?: (value: string) => void;
  /**
   * onFocus the selected listItem
   */
  onFocus?: () => void;
  /**
   * onRemove of the selected listItem
   */
  onRemove?: (select: MultiSelectOption) => void;
  /**
   * onRemoveAll of the selected listItems
   */
  onRemoveAll?: () => void;
  /**
   * Specifies if that field needs to be filled or not
   */
  required?: boolean;
  /**
   * allow to specify a class for the container
   */
  containerClassName?: string;
  /**
   * if a label is provided, it will be displayed
   */
  labelText?: string;
  /**
   * if a label is provided, it will provide the ability to style it
   */
  labelClassName?: string;
  /**
   * it will pass an id to the input or select element(in case of progressive enhancement)
   */
  id?: string;
  /**
   * will display an error message in three different positions (BEFORE_LABEL, BOTTOM, AFTER_LABEL and AFTER_HINT)
   */
  errorPosition?: AutoCompleteErrorPosition;
  /**
   * error message text
   */
  errorMessageText?: string;
  /**
   * error className
   */
  errorMessageClassName?: string;
  /**
   * error id
   **/
  errorId?: string;
  /**
   * visually hidden text of the error
   */
  errorVisuallyHiddenText?: VisuallyHidden;
};

//remove the default style from a button
const unstyleBtn = {
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
};

export enum AutoCompleteErrorPosition {
  BEFORE_LABEL = 'before-label',
  BOTTOM = 'bottom',
  AFTER_LABEL = 'after-label',
  AFTER_HINT = 'after-hint',
}

export const Autocomplete = ({
  options,
  minCharsBeforeSearch = 1,
  debounceMs = 0,
  inputProps,
  defaultValue = '',
  hintText,
  hintClass,
  suffix,
  prefix,
  multiSelect = false,
  notFoundText,
  resultId,
  resultActiveClass,
  resultUlClass,
  resultUlStyle,
  resultlLiClass,
  resultLiStyle,
  resultNoOptionClass,
  removeAllButtonClass,
  searchContainerStyle,
  selectedListItemStyle,
  selected,
  onSelected,
  onChange,
  onRemove,
  onRemoveAll,
  onFocus,
  required = false,
  props,
  containerClassName,
  labelText,
  labelClassName,
  id,
  errorPosition,
  errorMessageText = '',
  errorMessageClassName,
  errorId,
  errorVisuallyHiddenText,
}: autocompleteProps) => {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>(defaultValue);
  let hydrated = useHydrated();

  const delayResult = React.useMemo(
    () =>
      debounce((value) => {
        const filtered = options.filter((optionsName) =>
          optionsName.toLowerCase().includes(value.toLowerCase())
        );
        setActiveOption(0);
        setFilterList(filtered);
        setShowOptions(true);
      }, debounceMs),
    [debounceMs, options]
  );

  const delayedFilterResults = React.useCallback(delayResult, [delayResult]);

  const searchMemo = React.useMemo(
    () =>
      debounce(
        (value) =>
          //@ts-ignore
          onChange(value),
        debounceMs
      ),
    [debounceMs, onChange]
  );

  const debounceSearch = React.useCallback(searchMemo, [searchMemo]);

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    setUserInput(value);

    if (onChange) {
      debounceSearch(value);
    } else {
      delayedFilterResults(value);
    }
  };

  React.useEffect(() => {
    if (onChange) {
      setActiveOption(0);
      setFilterList(options);
      setShowOptions(true);
    }
  }, [options, onChange]);

  const handleClick = (evt: React.FormEvent<HTMLInputElement>) => {
    setActiveOption(0);
    setFilterList([]);
    setShowOptions(false);
    setUserInput(multiSelect ? '' : evt.currentTarget.innerHTML);
    if (onSelected) onSelected(evt.currentTarget.innerHTML);
  };

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.code === 'Enter') {
      setActiveOption(0);
      setShowOptions(false);
      setUserInput(filterList[activeOption]);
      if (onSelected) onSelected(filterList[activeOption]);
    } else if (evt.code === 'ArrowUp') {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (evt.code === 'ArrowDown') {
      if (activeOption === filterList.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  const displayResultList = (): boolean =>
    showOptions && userInput.length >= minCharsBeforeSearch;

  const searchEl: JSX.Element = multiSelect ? (
    <>
      <div
        role={Roles.presentation}
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {selected &&
          selected.map(
            ({ id, label, value }: MultiSelectOption, index: number) => (
              <Selected
                key={index}
                select={{
                  id,
                  label,
                  value,
                }}
                onRemove={onRemove}
                onFocus={onFocus}
                style={{
                  ...selectedListItemStyle,
                  display: 'inline-flex',
                }}
              />
            )
          )}
        {!hydrated ? (
          <FormSelect name="multiSelect" options={options} {...props} />
        ) : (
          <FormInput
            name="autocompleteSearch"
            type="text"
            value={userInput}
            onChange={handleChange}
            required={required}
            inputProps={{
              onKeyDown: onKeyDown,
              autoComplete: 'off',
              ...inputProps,
            }}
            {...props}
          />
        )}
      </div>
      <div>
        <SelectedItem
          className={removeAllButtonClass}
          label="x"
          role="button"
          ariaLabel="Remove all"
          onClick={onRemoveAll}
          style={{
            marginLeft: '5px',
            fontWeight: 'bold',
            verticalAlign: '-webkit-baseline-middle',
          }}
          tabIndex={0}
        />
      </div>
    </>
  ) : (
    <>
      {errorPosition &&
        errorPosition === AutoCompleteErrorPosition.BEFORE_LABEL && (
          <ErrorMessage
            text={errorMessageText}
            className={errorMessageClassName}
            id={errorId}
            visuallyHiddenText={errorVisuallyHiddenText}
          />
        )}
      {labelText && (
        <label htmlFor={id} className={labelClassName}>
          {labelText}
        </label>
      )}
      {errorPosition &&
        errorPosition === AutoCompleteErrorPosition.AFTER_LABEL && (
          <ErrorMessage
            text={errorMessageText}
            className={errorMessageClassName}
            id={errorId}
            visuallyHiddenText={errorVisuallyHiddenText}
          />
        )}
      {hintText && (
        <Hint text={hintText} className={hintClass} useLabel={false} />
      )}
      {errorPosition &&
        errorPosition === AutoCompleteErrorPosition.AFTER_HINT && (
          <ErrorMessage
            text={errorMessageText}
            className={errorMessageClassName}
            id={errorId}
            visuallyHiddenText={errorVisuallyHiddenText}
          />
        )}
      {!hydrated ? (
        <FormSelect
          name="select"
          options={options}
          {...props}
          id={id}
          defaultValue={defaultValue}
        />
      ) : (
        <FormInput
          name="autocompleteSearch"
          type="text"
          value={userInput}
          onChange={handleChange}
          required={required}
          inputProps={{
            onKeyDown: onKeyDown,
            autoComplete: 'off',
            id: id,
            ...inputProps,
          }}
          suffix={{
            content: (
              <button type="submit" style={unstyleBtn}>
                {suffix}
              </button>
            ),
          }}
          prefix={{
            content: (
              <button type="submit" style={unstyleBtn}>
                {prefix}
              </button>
            ),
          }}
          {...props}
        />
      )}
    </>
  );

  return (
    <>
      {multiSelect && hintText && (
        <Hint text={hintText} className={hintClass} useLabel={false} />
      )}
      <div className={containerClassName} style={{ ...searchContainerStyle }}>
        {searchEl}
        {displayResultList() && (
          <ResultList
            list={filterList}
            userInput={userInput}
            activeOption={activeOption}
            noElFoundText={notFoundText}
            onClick={handleClick}
            activeClass={resultActiveClass}
            ulContainerId={resultId}
            ulContainerClass={resultUlClass}
            ulContainerStyle={resultUlStyle}
            liContainerClass={resultlLiClass}
            liContainerStyle={resultLiStyle}
            noOptionClass={resultNoOptionClass}
          />
        )}
      </div>
    </>
  );
};
