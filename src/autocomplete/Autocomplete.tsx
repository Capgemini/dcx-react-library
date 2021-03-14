import React, { useState } from 'react';
import { FormInput } from '../formInput';
import { ResultList } from './ResultList';

type autocompleteProps = {
  /**
   * you need to provide a list of values to filter
   */
  options: string[];
  /**
   * it you want to pass extra properties
   */
  props?: any;
  /**
   * if you want to style your input  passing extra properties (e.g. search icon etc)
   */
  suffixProps?: any;
  /**
   * if you want to style your input passing extra properties (e.g. search icon etc)
   */
  prefixProps?: any;
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
   * event that return the selected value
   */
  onSelected?: (value: string) => void;
};

export const Autocomplete = ({
  options,
  suffixProps,
  prefixProps,
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
  const [userInput, setUserInput] = useState<string>('');

  const onChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    //TODO IMPROVE THE SEARCH
    const filtered = options.filter(
      optionName => optionName.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setActiveOption(0);
    setFilterList(filtered);
    setShowOptions(true);
    setUserInput(value);
  };

  const handleClick = (evt: React.FormEvent<HTMLInputElement>) => {
    setActiveOption(0);
    setFilterList([]);
    setShowOptions(false);
    setUserInput(evt.currentTarget.innerText);
    if (onSelected) onSelected(evt.currentTarget.innerText);
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

  return (
    <>
      <div className="search">
        <FormInput
          name="autocompleteSearch"
          type="text"
          value={userInput}
          onChange={onChange}
          inputProps={{
            onKeyDown: onKeyDown,
          }}
          suffix={
            suffixProps && <button type="submit">{...suffixProps}</button>
          }
          prefix={
            prefixProps && <button type="submit">{...prefixProps}</button>
          }
          {...props}
        />
      </div>
      {showOptions && (
        <ResultList
          list={filterList}
          userInput={userInput}
          activeOption={activeOption}
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
