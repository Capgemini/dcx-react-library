import * as React from 'react';
import { Autocomplete } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const firstSearch = [
  'Papaya',
  'Persimmon',
  'Paw Paw',
  'Prickly Pear',
  'Peach',
  'Pomegranate',
  'Pineapple',
];
const secondSearch = ['Persimmon', 'Peach'];
const thirdSearch = ['Persimmon'];

export const AutocompleteDemo = () => {
  const [selected, setSelected] = React.useState('');
  const handleSelected = (value: string) => setSelected(value);

  const [serverOptions, setServerOptions] = React.useState<String[]>([]);

  const handleOnChange = (value: string) => {
    switch (value) {
      case 'p':
        setServerOptions(firstSearch);
        break;
      case 'pe':
        setServerOptions(secondSearch);
        break;
      case 'per':
        setServerOptions(thirdSearch);
        break;
      default:
        setServerOptions(['no results']);
    }
  };

  return (
    <>
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
        suffix={<FontAwesomeIcon icon={faAt} title="at-button" />}
        prefix={<FontAwesomeIcon icon={faAt} title="at-button" />}
        defaultValue="Papaya"
        minCharsBeforeSearch={1}
        debounceMs={2000}
        onSelected={handleSelected}
        hintText="search the list of fruits"
      />
      selected: {selected}
      <h1>Server fetch</h1>
      <Autocomplete
        //@ts-ignore
        options={serverOptions}
        minCharsBeforeSearch={1}
        debounceMs={1000}
        onSelected={handleSelected}
        hintText="search the list of fruits dynamically"
        onChange={handleOnChange}
        notFoundText=" "
      />
      selected: {selected}
    </>
  );
};
