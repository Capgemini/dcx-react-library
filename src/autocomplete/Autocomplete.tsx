import React, { useState } from 'react';
import { FormInput } from '../formInput';
import { FormSelect } from '../formSelect';
import { Hint, Roles } from '../common';
import { MultiSelectOption } from '../multiSelect/Types';
import { ResultList } from './ResultList';
import { Selected } from '../multiSelect/components/Selected';
import { SelectedItem } from '../multiSelect/components/SelectedItem';
import { debounce } from 'lodash';

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
   * if you want to pass a style class to the result LI list
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
   * autocomplete witout javascript parameter
   */
  progressiveEnhacement?: boolean;
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
  progressiveEnhacement = false,
  onSelected,
  onChange,
  onRemove,
  onRemoveAll,
  onFocus,
  props,
}: autocompleteProps) => {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>(defaultValue);

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
    <div className="search" style={{ ...searchContainerStyle }}>
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
        {progressiveEnhacement ? (
          <FormSelect
            name="autocompleteSearchSelect"
            options={options}
            containerClassName={props.containerClassName}
            selectClassName={props.selectClassName}
            labelClassName={props.labelClassName}
          />
        ) : (
          <FormInput
            name="autocompleteSearch"
            type="text"
            value={userInput}
            onChange={handleChange}
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
    </div>
  ) : (
    <div className="search">
      {hintText && (
        <Hint text={hintText} className={hintClass} useLabel={true} />
      )}

      {progressiveEnhacement ? (
        <FormSelect
          options={options}
          containerClassName={props.containerClassName}
          selectClassName={props.selectClassName}
          labelClassName={props.labelClassName}
        />
      ) : (
        <FormInput
          name="autocompleteSearch"
          type="text"
          value={userInput}
          onChange={handleChange}
          inputProps={{
            onKeyDown: onKeyDown,
            autoComplete: 'off',
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
    </div>
  );

  return (
    <>
      {multiSelect && hintText && (
        <Hint text={hintText} className={hintClass} useLabel={true} />
      )}
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
    </>
  );
};
