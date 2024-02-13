import { Autocomplete } from '../../src/autocomplete/Autocomplete';
/**
 * The list of available options are:
 * ['Papaya','Persimmon','Paw Paw','Prickly Pear','Peach',Pomegranate',Pineapple']
 */
export default {
  title: 'DCXLibrary/Form/Autocomplete/Without style',
  component: Autocomplete,
  parameters: {
    options: {
      showPanel: true,
    },
  },
};

export const Unstyled = {
  args: {
    options: [
      'Papaya',
      'Persimmon',
      'Paw Paw',
      'Prickly Pear',
      'Peach',
      'Pomegranate',
      'Pineapple',
    ],
    defaultValue: 'Papaya',
    minCharsBeforeSearch: 1,
    debounceMs: 100,
    hintText: 'search the list of fruits',
    hintClass: 'hintClass',
    resultUlClass: 'resultUlClass',
    resultlLiClass: 'resultlLiClass',
    resultNoOptionClass: 'resultNoOptionClass',
    resultActiveClass: 'resultActiveClass',
    notFoundText: 'No fruit found',
  },
};
