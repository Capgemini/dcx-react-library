import React, { useState } from 'react';
import { FormInput } from '../formInput';
import { ResultList } from './ResultList';
import { debounce } from 'lodash';
type autocompleteProps = {
  /**
   * you need to provide a list of values to filter
   */
  options: string[];
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
   * if you want to pass a style class to the result UL list
   */
  resultUlClass?: string;
  /**
   * if you want to pass a style class to the result LI list
   */
  resultlLiClass?: string;
  /**
   * if you want to pass a style class to no result  list
   */
  resultNoOptionClass?: string;
  /**
   *  if you want to style the  element selected in the result list
   */
  resultActiveClass?: string;
  /**
   * optional text for not found element
   */
  notFoundText?: string;
  /**
   * event that return the selected value
   */
  onSelected?: (value: string) => void;
};

export const Autocomplete = ({
  options,
  minCharsBeforeSearch = 1,
  debounceMs = 0,
  defaultValue = '',
  hintText,
  hintClass,
  suffix,
  prefix,
  notFoundText,
  resultActiveClass,
  resultUlClass,
  resultlLiClass,
  resultNoOptionClass,
  onSelected,
  props,
}: autocompleteProps) => {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filterList, setFilterList] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>(defaultValue);

  const delayedFilterResults = React.useCallback(
    debounce(value => {
      const filtered = options.filter(optionsName =>
        optionsName.toLowerCase().includes(value.toLowerCase())
      );
      setActiveOption(0);
      setFilterList(filtered);
      setShowOptions(true);
    }, debounceMs),
    []
  );

  const onChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    setUserInput(value);
    delayedFilterResults(value);
  };

  const handleClick = (evt: React.FormEvent<HTMLInputElement>) => {
    setActiveOption(0);
    setFilterList([]);
    setShowOptions(false);
    setUserInput(evt.currentTarget.innerHTML);
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

  return (
    <>
      <div className="search">
        {hintText && <label className={hintClass}>{hintText}</label>}
        <FormInput
          name="autocompleteSearch"
          type="text"
          value={userInput}
          onChange={onChange}
          inputProps={{
            onKeyDown: onKeyDown,
          }}
          suffix={suffix && <button type="submit">{suffix}</button>}
          prefix={prefix && <button type="submit">{prefix}</button>}
          {...props}
        />
      </div>
      {displayResultList() && (
        <ResultList
          list={filterList}
          userInput={userInput}
          activeOption={activeOption}
          noElFoundText={notFoundText}
          onClick={handleClick}
          activeClass={resultActiveClass}
          ulContainerClass={resultUlClass}
          liContainerClass={resultlLiClass}
          noOptionClass={resultNoOptionClass}
        />
      )}
    </>
  );
};
