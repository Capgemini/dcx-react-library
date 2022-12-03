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
import { FormSelectProps } from '../formSelect/FormSelect';

type autocompleteProps = {
  /**
   * you need to provide a list of values to filter
   */
  options: string[];
  /**
   * it will add a dynamic id to every option provided. It will concatenate an index for each item
   * @example
   * optionsId: 'dcx-option-id will result as dcx-option-id-1, dcx-option-id-2, etc
   */
  optionsId?: string;
  /**
   * list of selected options for multi select
   */
  selected?: MultiSelectOption[];
  /**
   * specify the number of character to press before the option are displayed
   */
  minCharsBeforeSearch?: number;
  /**
   * the messsage to display if the specified number of minimum characters (minCharsBeforeSearch)
   *  has not yet been entered by the user
   */
  minCharsMessage?: string;
  /**
   * a predicate function for determining whether to display a promptMessage
   *  when the search input receives focus
   */
  promptCondition?: () => boolean;
  /**
   * the message to display if the promptCondition has been met
   */
  promptMessage?: string;
  /**
   * the value for the id attribute of the prompt container
   */
  promptId?: string;
  /**
   * a CSS class for styling the prompt
   */
  promptClassName?: string;
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
  /**
   * if you want to pass a name for the input or for the select (in case of progressive enhancement)
   */
  name?: string;
  /**
   * it will pass extra select element(in case of progressive enhancement)
   */
  selectProps?: FormSelectProps;
  /**
   * generic parameter to pass whatever element before the input
   **/
  prefix?: {
    content?: JSX.Element | string;
    properties: React.HTMLAttributes<HTMLDivElement>;
  };
  /**
   * generic parameter to pass whatever element after the input
   **/
  suffix?: {
    content?: JSX.Element | string;
    properties: React.HTMLAttributes<HTMLDivElement>;
  };
};

export enum AutoCompleteErrorPosition {
  BEFORE_LABEL = 'before-label',
  BOTTOM = 'bottom',
  AFTER_LABEL = 'after-label',
  AFTER_HINT = 'after-hint',
}

export const Autocomplete = ({
  options,
  optionsId,
  minCharsBeforeSearch = 1,
  minCharsMessage = '',
  promptCondition = () => false,
  promptMessage = '',
  promptId = 'input-prompt',
  promptClassName,
  debounceMs = 0,
  inputProps,
  defaultValue = '',
  hintText,
  hintClass,
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
  containerClassName,
  labelText,
  labelClassName,
  id,
  errorPosition,
  errorMessageText = '',
  errorMessageClassName,
  errorId,
  errorVisuallyHiddenText,
  name,
  selectProps,
  prefix,
  suffix,
}: autocompleteProps) => {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>(defaultValue);
  let hydrated = useHydrated();

  const showPromptMessage = (inputValue = userInput): boolean =>
    inputValue.trim().length === 0 &&
    promptCondition() &&
    promptMessage.length > 0;

  const showMinCharsMessage = (inputValue = userInput): boolean =>
    !showPromptMessage() &&
    inputValue.trim().length < minCharsBeforeSearch &&
    minCharsMessage.length > 0;

  const displayResultList = (inputValue = userInput): boolean =>
    showOptions && inputValue.trim().length >= minCharsBeforeSearch;

  const handlePrompt = (
    _evt: React.FormEvent<HTMLInputElement>,
    inputValue = userInput
  ) => {
    const canShowPrompt =
      !displayResultList(inputValue) &&
      (showMinCharsMessage(inputValue) || showPromptMessage(inputValue));

    if (!showPrompt && canShowPrompt) {
      setShowPrompt(true);
    } else if (showPrompt && !canShowPrompt) {
      setShowPrompt(false);
    }
  };

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
    // prevent user input if promptCondition() is true
    if (promptCondition()) {
      return;
    }

    const { value } = evt.currentTarget;
    setUserInput(value);
    handlePrompt(evt, value);

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
    if (!showOptions) {
      return;
    }

    if (evt.code === 'Enter') {
      evt.preventDefault();
      setActiveOption(0);
      setShowOptions(false);

      if (filterList.length > 0) {
        setUserInput(filterList[activeOption]);
        if (onSelected) onSelected(filterList[activeOption]);
      }
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

  const onBlur = () => {
    setShowOptions(false);
    setShowPrompt(false);
  };

  const formInput: JSX.Element = (
    <>
      <FormInput
        name={name || 'autocompleteSearch'}
        type="text"
        value={userInput}
        onChange={handleChange}
        onFocus={handlePrompt}
        onBlur={onBlur}
        prefix={prefix}
        suffix={suffix}
        required={required}
        inputProps={{
          onKeyDown,
          autoComplete: 'off',
          id,
          ...inputProps,
          ...(showPrompt && { 'aria-describedby': promptId }),
        }}
      />
      {showPrompt && (
        <div className={promptClassName} id={promptId}>
          {showPromptMessage() && promptMessage}
          {showMinCharsMessage() && minCharsMessage}
        </div>
      )}
    </>
  );

  const searchEl: JSX.Element = multiSelect ? (
    <>
      <div
        role={Roles.presentation}
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
          position: 'relative',
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
          <FormSelect name="multiSelect" options={options} {...inputProps} />
        ) : (
          formInput
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
    <div style={{ position: 'relative' }}>
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
          name={name || 'select'}
          options={options}
          id={id}
          defaultValue={defaultValue}
          {...selectProps}
        />
      ) : (
        formInput
      )}
    </div>
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
            listId={optionsId}
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
