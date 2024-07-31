import * as React from 'react';
import { StaticAutocomplete } from '@capgeminiuk/dcx-react-library';

const handleSearch = (value: string, options: string[]) => {
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

export const StaticAutocompleteDemo = () => {
  const [selected, setSelected] = React.useState('');
  const handleSelected = (value: string) => setSelected(value);

  const [serverOptions, setServerOptions] = React.useState<String[]>([]);

  const handleOnChange = (value: string, _options: string[]) => {
    let result: string[] = []
    switch (value) {
      case 'p':
        result = [
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ];
        break;
      case 'pe':
        result = ['Persimmon', 'Peach'];
        break;
      case 'per':
        result = ['Persimmon'];
        break;
      default:
        result = ['no results'];
    }

    setServerOptions(result);
    return result;
  };

  const [status, setStatus] = React.useState('');
  const change = (length: number, property: string, position: number) => {
    let newText = '';
    if (length === 0) {
      newText = 'No search results';
    } else if (length > 0) {
      newText = `${length} result${length > 1 ? 's are' : ' is'} available. ${property} ${position} of ${length} is highlighted`;
    }
    setStatus(newText);
  };

  return (
    <>
      <StaticAutocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        id="fruitTest"
        minCharsBeforeSearch={1}
        debounceMs={2000}
        onSelected={handleSelected}
        labelText="search the list of fruits"
        containerClassName="test"
        notFoundText="No fruit found"
        optionsId="fruit-option"
        statusUpdate={(length, property, position) =>
          change(length, property, position)
        }
        accessibilityStatus={status}
        accessibilityHintText="When autocomplete results are available use up and down arrows to
        review and enter to select. Touch device users, explore by touch or
        with swipe gestures."
      />
      selected: {selected}

      <h2>Server fetch</h2>
      <StaticAutocomplete
        //@ts-ignore
        options={serverOptions}
        minCharsBeforeSearch={1}
        debounceMs={1000}
        onSelected={handleSelected}
        hintText="search the list of fruits dynamically"
        search={handleOnChange}
        notFoundText=" "
      />
      selected: {selected}

      <h2>With conditional prompt</h2>
      <StaticAutocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        defaultValue=""
        minCharsBeforeSearch={1}
        promptCondition={() => true}
        promptMessage="Enter a valid date before typing here"
        debounceMs={100}
        hintText="click inside the input to see the prompt"
        hintClass="hintClass"
        resultUlClass="resultUlClass"
        resultlLiClass="resultlLiClass"
        resultNoOptionClass="resultNoOptionClass"
        resultActiveClass="resultActiveClass"
        notFoundText="No fruit found"
      />
      <h2>With min-chars prompt</h2>
      <StaticAutocomplete
        options={[
          'Papaya',
          'Persimmon',
          'Paw Paw',
          'Prickly Pear',
          'Peach',
          'Pomegranate',
          'Pineapple',
        ]}
        defaultValue=""
        minCharsBeforeSearch={1}
        minCharsMessage="Type at least 1 character to see the available options"
        debounceMs={100}
        hintText="click inside the input to see the prompt"
        hintClass="hintClass"
        resultUlClass="resultUlClass"
        resultlLiClass="resultlLiClass"
        resultNoOptionClass="resultNoOptionClass"
        resultActiveClass="resultActiveClass"
        notFoundText="No fruit found"
      />
      <h2>With search and alphabet sort</h2>
      <StaticAutocomplete
        options={[
          'Zucchini',
          'Tangelo',
          'Kumquat',
          'Jambul',
          'Peach',
          'Pomegranate',
          'Pineapple',
          'Coconut',
          'Mulberry',
          'Banana',
          'Mango',
          'Acerola',
          'Lychee',
        ]}
        defaultValue=""
        minCharsBeforeSearch={1}
        minCharsMessage="Type at least 1 character to see the available options"
        debounceMs={100}
        hintText="click inside the input to see the prompt"
        hintClass="hintClass"
        resultUlClass="resultUlClass"
        resultlLiClass="resultlLiClass"
        resultNoOptionClass="resultNoOptionClass"
        resultActiveClass="resultActiveClass"
        notFoundText="No fruit found"
        search={handleSearch}
      />
    </>
  );
};
