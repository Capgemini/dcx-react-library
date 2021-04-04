import * as React from 'react';
import { FormRadio, FormGroup } from 'dcx-react-library';

export const FormRadioDemo = () => {
  const [value, setValue] = React.useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <h1>Basic Single Radio Buttons</h1>
      <FormRadio
        id="single-1"
        value={value}
        label="Single Radio 1 label text"
        name="group1"
        inputProps={{
          onChange: handleChange,
        }}
      />
      <FormRadio
        id="single-2"
        value={value}
        label="Single Radio 2 label text"
        name="group1"
        inputProps={{
          onChange: handleChange,
        }}
      />
      <br />
      <FormGroup
        name="group2"
        items={[
          {
            id: 'radio-1',
            label: 'Option 1',
            value: 'value-1',
            onChange: handleChange,
          },
          {
            id: 'radio-2',
            label: 'Option 2',
            value: 'value-2',
            onChange: handleChange,
          },
          {
            id: 'radio-3',
            label: 'Option 3',
            disabled: true,
            hint: {
              text: 'Hint text for this item',
            },
            value: 'value-3',
            onChange: handleChange,
          },
        ]}
        hint={{
          text: 'This is some hint text',
        }}
        legend={{
          text: 'Basic Group Radios',
          isHeading: true,
        }}
        onChange={handleChange}
      />
      <br />
    </>
  );
};
