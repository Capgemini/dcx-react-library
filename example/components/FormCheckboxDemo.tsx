import * as React from 'react';
import { FormCheckbox } from 'dcx-react-library';

export const FormCheckboxDemo = () => {
  const [value, setValue] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.currentTarget.value);
    setChecked(!checked);
  };

  return (
    <>
      <h1>Single Checkboxes</h1>
      <h2>Standard Checkbox</h2>
      <FormCheckbox
        id="checkbox-1"
        name="group1"
        value={value}
        label="Checkbox 1 label text"
        onChange={handleChange}
      />
      <h2>Pre-checked checkbox</h2>
      <FormCheckbox
        id="checkbox-2"
        name="group2"
        value={value}
        label="Checkbox 2 label text"
        onChange={handleChange}
        defaultChecked={checked}
      />
      <h2>Disabled Checkbox</h2>
      <FormCheckbox
        id="checkbox-3"
        name="group3"
        value={value}
        label="Checkbox 3 label text"
        onChange={handleChange}
        disabled={true}
      />
    </>
  );
};
