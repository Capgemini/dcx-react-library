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
        suffixProps={<FontAwesomeIcon icon={faAt} />}
        onSelected={handleSelected}
      />
      selected: {selected}
    </>
  );
};
