import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Autocomplete } from '../../src/autocomplete/Autocomplete';
import './style.css';

const AutocompleteDemo = `
function AutocompleteDemo() {
   
  const handleSelected = value => {
    console.log(value)
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
      defaultValue="Papaya"
      minCharsBeforeSearch={1}
      debounceMs={100}
      hintText="search the list of fruits"
      hintClass=""
      prefix={<></>}
      suffix={<></>}
      resultUlClass=""
      resultlLiClass=""
      resultNoOptionClass=""
      resultActiveClass=""
      inputProps={{}}
      notFoundText="No fruit found"
      onSelected={handleSelected} 
      containerClassName=""
      labelText=""
      labelClassName=""
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
