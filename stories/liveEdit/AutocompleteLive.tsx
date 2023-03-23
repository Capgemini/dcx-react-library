import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Autocomplete } from '../../src/autocomplete/Autocomplete';
import './style.css';

const AutocompleteDemo = `
function AutocompleteDemo() {
   
  const handleSelected = value => {
    console.log(value)
  }

  const handleSearch = (value, options) => {
    return options
      .filter(optionsName => optionsName.toLowerCase().includes(value.toLowerCase()))
      .sort((a, b) => {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0
      });
  }

  return (
    <Autocomplete
      options={[
        'Papaya',
        'Persimmon',
        'Paw Paw',
        'Prickly Pear',
        'Peach',
        'Pomegranate',
        'Pineapple',
      ]}
      optionsId='dcx-dynamic-id'
      defaultValue="Papaya"
      minCharsBeforeSearch={1}
      debounceMs={100}
      hintText="search the list of fruits"
      hintClass=""
      hintId="hintid"
      prefix={<></>}
      suffix={<></>}
      resultUlClass=""
      resultlLiClass=""
      resultNoOptionClass=""
      resultActiveClass=""
      notFoundText="No fruit found"
      onSelected={handleSelected} 
      containerClassName=""
      labelText=""
      labelClassName=""
      labelProps={{id:'labelid'}}
      id=""
      errorPosition='below'
      errorMessageText=""
      errorMessageClassName=""
      errorId=""
      errorMessageVisuallyHidden={{
        text: "",
        className: "",
      }}
      name=""
      inputProps={{}}
      selectProps={{}}
      tabIndex={0}
      search={handleSearch}
    />
  )
}
`.trim();

const AutocompleteLive = () => {
  const scope = { Autocomplete };
  return (
    <LiveProvider code={AutocompleteDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default AutocompleteLive;
