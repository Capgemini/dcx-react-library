import * as React from 'react';
import { FormRadio, FormGroup } from 'dcx-react-library';

export const FormRadioDemo = () => {
  const [selected, setSelected] = React.useState('single-2');
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setSelected(event.currentTarget.value);
  };

  const [conditionalSelected, setConditionalSelected] = React.useState(
    'single-1'
  );
  const handleConditionalChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setConditionalSelected(event.currentTarget.value);

  const [inputFieldValues, setInputFieldValues] = React.useState({
    'single-1': '',
    'single-2': '',
    'single-3': '',
  });
  const handleInputFieldChange = (id: string, value: string) => {
    setInputFieldValues({
      ...inputFieldValues,
      [id]: value,
    });
  };

  React.useEffect(() => {
    const output = document.getElementById('conditional-inputs');
    if (output)
      output.innerHTML = `${conditionalSelected} ${JSON.stringify(
        inputFieldValues
      )}`;
  }, [inputFieldValues, conditionalSelected]);

  return (
    <>
      <h2>Basic Single Radio Buttons</h2>
      <FormRadio
        id="single-1"
        value="single-1"
        selected={selected === 'single-1'}
        label="Single Radio 1 label text"
        name="group1"
        onChange={handleChange}
      />
      <FormRadio
        id="single-2"
        value="single-2"
        selected={selected === 'single-2'}
        label="Single Radio 2 label text"
        name="group1"
        onChange={handleChange}
      />
      <FormRadio
        id="single-3"
        value="single-3"
        selected={selected === 'single-3'}
        label="Single Radio 2 label text"
        name="group1"
        onChange={handleChange}
      />
      <br />
      <h2>Basic Single Radio Buttons with conditional input</h2>
      <div id="conditional-inputs" style={{ fontWeight: 'bold' }}></div>
      <FormRadio
        id="single-1"
        value="single-1"
        selected={conditionalSelected === 'single-1'}
        label="Single Radio 1 label text"
        name="group2"
        onChange={handleConditionalChange}
        conditional={{
          name: 'single-input-1',
          label: 'single input 1',
          type: 'text',
          value: inputFieldValues['single-1'],
          onChange: value => handleInputFieldChange('single-1', value),
        }}
      />
      <FormRadio
        id="single-2"
        value="single-2"
        selected={conditionalSelected === 'single-2'}
        label="Single Radio 2 label text"
        name="group2"
        onChange={handleConditionalChange}
        conditional={{
          name: 'single-input-2',
          label: 'single input 2',
          type: 'text',
          value: inputFieldValues['single-2'],
          onChange: value => handleInputFieldChange('single-2', value),
        }}
      />
      <FormRadio
        id="single-3"
        value="single-3"
        selected={conditionalSelected === 'single-3'}
        label="Single Radio 2 label text"
        name="group2"
        onChange={handleConditionalChange}
        conditional={{
          name: 'single-input-3',
          label: 'single input 3',
          type: 'text',
          value: inputFieldValues['single-3'],
          onChange: value => handleInputFieldChange('single-3', value),
        }}
      />
      <FormGroup
        name="group3"
        type="radio"
        items={[
          {
            id: 'radio-1',
            label: 'Option 1',
            value: 'value-1',
          },
          {
            id: 'radio-2',
            label: 'Option 2',
            value: 'value-2',
          },
          {
            id: 'radio-3',
            label: 'Option 3',
            disabled: true,
            hint: {
              text: 'Hint text for this item',
            },
            value: 'value-3',
          },
        ]}
        hint={{
          text: 'This is some hint text',
        }}
        legend={{
          text: 'Basic Group Radios',
          heading: {
            priority: 4,
          },
        }}
        onChange={handleChange}
      />
      <br />
    </>
  );
};
