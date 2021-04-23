import React from 'react';
import { FormSelect } from 'dcx-react-library';

export const FormSelectDemo = () => {
  const [value, setValue] = React.useState('');

  const handleSelectedValue = evt => {
    setValue(evt.currentTarget.value);
  };
  return (
    <>
      <FormSelect
        options={[
          { label: 'option1', value: 'value1' },
          { label: 'option2', value: 'value2' },
        ]}
        value={value}
        onChange={handleSelectedValue}
      />
      selectedValue: {value}
    </>
  );
};
