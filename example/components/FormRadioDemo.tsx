import * as React from 'react';
import { FormRadio, FormGroup } from 'dcx-react-library';

export const FormRadioDemo = () => {
  const [value, setValue] = React.useState('');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <h1>Basic Single Radio</h1>
      <FormRadio
        id="radio-1"
        name="group1"
        value={value}
        label="Single Radio 1 label text"
        onChange={handleChange}
        selected={true}
      />
      <br />
      <FormGroup
        name="group2"
        items={[
          {
            id: 'radio-2',
            label: 'Option 1',
            selected: true,
            value: value,
            onChange: handleChange,
          },
          {
            id: 'radio-3',
            label: 'Option 2',
            value: value,
            onChange: handleChange,
          },
          {
            id: 'radio-4',
            label: 'Option 3',
            disabled: true,
            hint: {
              text: 'Hint text for this item',
            },
            value: value,
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
      />
      <br />
    </>
  );
};
