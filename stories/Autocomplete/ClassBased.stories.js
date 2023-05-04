import { Autocomplete } from '../../src/autocomplete/Autocomplete';
import './style.css';

/**
 * In this section we're using the Autocomplete component providing the GovUk style passing the relative `className`. Feel free to use your own css and style the formInput as you prefer
 * The list of available options are:
 * ['Papaya','Persimmon','Paw Paw','Prickly Pear','Peach',Pomegranate',Pineapple']
*/
export default {
  title: 'DCXLibrary/Form/Autocomplete/Class based',
  component: Autocomplete,
  parameters: {
    options: {
      showPanel: true,
    },
  },
  tags: ['autodocs'] 
};

const options = [
  'Papaya',
  'Persimmon',
  'Paw Paw',
  'Prickly Pear',
  'Peach',
  'Pomegranate',
  'Pineapple',
];

export const Basic = {  
  name: 'Basic',
  args: {
    options: options,
    minCharsBeforeSearch:1,
    debounceMs:100,
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
  },
};

export const Hint = {  
  name: 'Hint',
  args: {
    options: options,
    minCharsBeforeSearch:1,
    debounceMs:100,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
  },
};

/**
 * Before the autocomplete appear you need to type at least 2 character
 */
export const MinChars = {  
  name: 'Hint',
  args: {
    options: options,
    minCharsBeforeSearch:2,
    debounceMs:100,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
  },
};

export const Defaultvalue = {  
  name: 'Default value',
  args: {
    options: options,
    minCharsBeforeSearch:2,
    debounceMs:100,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
    defaultValue:"Papaya"
  },
};

export const NoResult = {  
  name: 'No result found',
  args: {
    options: options,
    minCharsBeforeSearch:1,
    debounceMs:100,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    defaultValue:"Papaya",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
    notFoundText:"No fruit found"
  },
};

export const Placeholder = {  
  name: 'Placeholder',
  args: {
    options: options,
    minCharsBeforeSearch:1,
    debounceMs: 100,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{
      className: 'govuk-input',
      placeholder: 'Search for a fruit',
    },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
  },
};

export const WithLabel = {  
  name: 'With label',
  args: {
    minCharsBeforeSearch:1,
    debounceMs: 100,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClass:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
    labelText:"Search for a fruit",
  },
};

export const WithError = {  
  name: 'With error',
  render: function ({ onClick, ...args }) {
    return (
      <form>
        <Autocomplete {...args}/>
        <button type="submit">Search</button>
      </form>
    )
  },
  args: {
    minCharsBeforeSearch:1,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClas:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
    errorPostion:"after-hint",
    errorMessageText:"an error occured",
    errorMessageClassName:"govuk-error-message",
    labelText:"Search for a fruit",
    errorVisuallyHidden: {
      text: 'Error:',
      className: 'govuk-visually-hidden',
    },
    id:"fruit-search"
  },
};

export const WithCustomSearch = {  
  name: 'With custom search function',
  render: function ({ onClick, ...args }) {
    const handleSearch = (value, options) => {
      return options
        .filter((optionsName) =>
          optionsName.toLowerCase().includes(value.toLowerCase())
        )
        .sort((a, b) => {
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
    };
    return (
      <form>
        <Autocomplete {...args} search={handleSearch}/>
        <button type="submit">Search</button>
      </form>
    )
  },
  args: {
    minCharsBeforeSearch:1,
    hintText:"Select your fruit",
    hintClass:"autocomplete__label",
    inputProps:{ className: 'govuk-input' },
    resultUlClass:"autocomplete__menu",
    resultlLiClas:"autocomplete__option",
    resultNoOptionClass:"resultNoOptionClass",
    resultActiveClass:"autocomplete__option",
    notFoundText:"No fruit found",
    errorPostion:"after-hint",
    errorMessageText:"an error occured",
    errorMessageClassName:"govuk-error-message",
    labelText:"Search for a fruit",
    errorVisuallyHidden: {
      text: 'Error:',
      className: 'govuk-visually-hidden',
    },
    id:"fruit-search"
  },
};
