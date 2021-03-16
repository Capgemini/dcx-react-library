import * as React from 'react';
import { Autocomplete } from 'dcx-react-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
export const AutocompleteDemo = () => {
  const [selected, setSelected] = React.useState('');
  const handleSelected = (value: string) => setSelected(value);

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
        suffix={<FontAwesomeIcon icon={faAt} />}
        prefix={<FontAwesomeIcon icon={faAt} />}
        defaultValue="Papaya"
        minCharsBeforeSearch={1}
        debounceMs={2000}
        onSelected={handleSelected}
        hintText="search the list of fruits"
      />
      selected: {selected}
    </>
  );
};
