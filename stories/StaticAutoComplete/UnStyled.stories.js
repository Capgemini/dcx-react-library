import { StaticAutocomplete } from '../../src/staticAutocomplete';
/**
 * The list of available options are:
 * ['Papaya','Persimmon','Paw Paw','Prickly Pear','Peach',Pomegranate',Pineapple']
 */
export default {
  title: 'DCXLibrary/Form/StaticAutocomplete/Without style',
  component: StaticAutocomplete,
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
