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

const options = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

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
    resultActiveClass:"autocomplete__option--focused"
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
    resultActiveClass:"autocomplete__option--focused"
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
    resultActiveClass:"autocomplete__option--focused"
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
    defaultValue:"Papaya",
    resultActiveClass:"autocomplete__option--focused"
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
    resultActiveClass:"autocomplete__option--focused"
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
    resultActiveClass:"autocomplete__option--focused"
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
    resultActiveClass:"autocomplete__option--focused"
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
    id:"fruit-search",
    resultActiveClass:"autocomplete__option--focused"
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
    id:"fruit-search",
    resultActiveClass:"autocomplete__option--focused"
  },
};
