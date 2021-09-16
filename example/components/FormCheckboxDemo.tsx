import * as React from 'react';
import { FormCheckbox, FormGroup } from 'dcx-react-library';

export const FormCheckboxDemo = () => {
  const [value, setValue] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.currentTarget.value);
    setChecked(!checked);
  };

  const [formValue, setFormValue] = React.useState('');
  const handleFormChange = event => {
    setFormValue(event.currentTarget.value);
  };

  return (
    <>
      <h1>Single Checkboxes</h1>
      <h2 id="standard-checkbox-tag">Standard Checkbox</h2>
      <FormCheckbox
        ariaDescribedBy="standard-checkbox-tag"
        id="checkbox-1"
        name="group1"
        value={value}
        label="Checkbox 1 label text"
        onChange={handleChange}
      />
      <h2 id="prechecked-checkbox-tag">Pre-checked checkbox</h2>
      <FormCheckbox
        ariaDescribedBy="prechecked-checkbox-tag"
        id="checkbox-2"
        name="group2"
        value={value}
        label="Checkbox 2 label text"
        onChange={handleChange}
        defaultChecked={checked}
      />
      <h2 id="disabled-checkbox-tag">Disabled Checkbox</h2>
      <FormCheckbox
        ariaDescribedBy="disabled-checkbox-tag"
        id="checkbox-3"
        name="group3"
        value={value}
        label="Checkbox 3 label text"
        onChange={handleChange}
        disabled={true}
      />
      <h2>Group</h2>
      <FormGroup
        name="name-of-group"
        type="checkbox"
        onChange={handleFormChange}
        items={[
          {
            label: 'item-label',
            value: 'yes',
            id: 'radio-1',
            selected: true,
            conditional: {
              value: '',
              name: '',
              label: 'hint text',
              type: 'text',
              className: '',
              groupClassName: '',
              id: 'conditional-1',
              inputClassName: '',
              inputId: 'empty-text-input',
              labelClassName: '',
              labelFor: 'empty-text-input',
            },
            hint: {
              text: '',
              className: '',
              id: '',
            },
          },
          {
            label: 'item-label',
            value: 'no',
            id: 'radio-2',
            conditional: {
              value: '',
              name: '',
              label: '',
              type: 'text',
              className: '',
              groupClassName: '',
              id: 'conditional-2',
              inputClassName: '',
              inputId: '',
              labelClassName: '',
            },
            hint: {
              text: 'hint text',
              className: '',
              id: '',
              position: 'above',
            },
          },
        ]}
        ariaDescribedBy="heading-text"
        error={{
          text: '',
          className: '',
          id: '',
          visuallyHiddenText: '',
        }}
        fieldsetClasses=""
        groupClasses=""
        hint={{
          id: '',
          text: '',
          className: '',
        }}
        id=""
        inputProps={{}}
        itemProps={{}}
        itemsClasses=""
        labelProps={{}}
        legend={{
          text: 'Heading text',
          className: '',
          heading: {
            id: 'heading-text',
            priority: '2',
            className: '',
          },
        }}
      />
      <pre>{formValue}</pre>
    </>
  );
};
