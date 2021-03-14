import * as React from 'react';
import { FormRadio } from 'dcx-react-library';

export const FormRadioDemo = () => {
  const [value, setValue] = React.useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <h1>Basic Single Radios Stacked</h1>
      <FormRadio
        id="radio-1"
        name="group1"
        value={value}
        label="Radio 1 label text"
        onChange={handleChange}
        selected={true}
      />
      <FormRadio
        id="radio-2"
        name="group1"
        value={value}
        label="Radio 2 label text"
        onChange={handleChange}
      />
      <FormRadio
        id="radio-3"
        name="group1"
        value={value}
        label="Radio 3 label text"
        onChange={handleChange}
      />
      <FormRadio
        id="radio-4"
        name="group1"
        value={value}
        label="Radio 4 label text"
        onChange={handleChange}
        disabled={true}
      />
    </>
  );
};
