import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Autocomplete } from '../../src/autocomplete/Autocomplete';

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

  const [status, setStatus] = React.useState('');
  const change = (length: number, property: string, position: number) => {
    let newText = '';
    if (length === 0) {
      newText = 'No search results';
    } else if (length > 0) {
      newText = \`\${length} result\${length > 1 ? 's are' : ' is'} available. \${property} \${position} of \${length} is highlighted\`;
    }
    setStatus(newText);
  };

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
      prefix={{
        properties: {},
        content: <></>
      }}
      suffix={{
        properties: {},
        content: <></>
      }}
      resultUlClass=""
      resultlLiClass=""
      resultNoOptionClass=""
      resultActiveClass=""
      notFoundText="No fruit found"
      onSelected={handleSelected} 
      containerClassName="fruit"
      labelText=""
      labelClassName=""
      labelProps={{id:'labelid'}}
      id="fruitTest"
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
      statusUpdate={(length, property, position) =>
        change(length, property, position)
      }
      accessibilityStatus={status}
      accessibilityHintText="When autocomplete results are available use up and down arrows to
      review and enter to select. Touch device users, explore by touch or
      with swipe gestures."
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
