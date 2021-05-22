import * as React from 'react';
import { FormRadio, FormGroup } from 'dcx-react-library';

export const FormRadioDemo = () => {
  const [selected, setSelected] = React.useState('single-2');
  const handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    conditionalInput?: string
  ) => void = event => {
    setSelected(event.currentTarget.value);
  };

  const [conditionalSelected, setConditionalSelected] = React.useState<string>(
    'single-1'
  );
  const [groupSelected, setGroupSelected] = React.useState<string>('radio-1');
  const handleConditionalChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    conditionalInput?: string
  ) => void = (
    event: React.ChangeEvent<HTMLInputElement>,
    conditionalInput: string
  ) => {
    if (conditionalInput) {
      setInputFieldValues({
        ...inputFieldValues,
        [event.currentTarget.id]: conditionalInput,
      });
      return;
    }

    setConditionalSelected(event.currentTarget.value);
  };

  const handleGroupConditionalChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    conditionalInput?: string
  ) => void = (
    event: React.ChangeEvent<HTMLInputElement>,
    conditionalInput: string
  ) => {
    if (conditionalInput) {
      setInputFieldGroupValues({
        ...inputFieldGroupValues,
        [event.currentTarget.id]: conditionalInput,
      });
      return;
    }

    setGroupSelected(event.currentTarget.value);
  };

  const [inputFieldValues, setInputFieldValues] = React.useState({
    'single-input-1': '',
    'single-input-2': '',
    'single-input-3': '',
  });

  const [inputFieldGroupValues, setInputFieldGroupValues] = React.useState({
    'group-input-1': '',
    'group-input-2': '',
    'group-input-3': '',
  });

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
          inputId: 'single-input-1',
          name: 'single-input-1',
          label: 'single input 1',
          type: 'text',
          value: inputFieldValues['single-input-1'],
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
          inputId: 'single-input-2',
          name: 'single-input-2',
          label: 'single input 2',
          type: 'text',
          value: inputFieldValues['single-input-2'],
        }}
      />
      <FormRadio
        id="single-3"
        value="single-3"
        selected={conditionalSelected === 'single-3'}
        label="Single Radio 3 label text"
        name="group2"
        onChange={handleConditionalChange}
        conditional={{
          inputId: 'single-input-3',
          name: 'single-input-3',
          label: 'single input 3',
          type: 'text',
          value: inputFieldValues['single-input-3'],
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
            selected: groupSelected === 'radio-1',
            conditional: {
              inputId: 'group-input-1',
              name: 'group-input-1',
              label: 'group input 1',
              type: 'text',
              value: inputFieldGroupValues['group-input-1'],
            },
          },
          {
            id: 'radio-2',
            label: 'Option 2',
            value: 'value-2',
            selected: groupSelected === 'radio-2',
            conditional: {
              inputId: 'group-input-2',
              name: 'group-input-2',
              label: 'group input 2',
              type: 'text',
              value: inputFieldGroupValues['group-input-2'],
            },
          },
          {
            id: 'radio-3',
            label: 'Option 3',
            disabled: true,
            hint: {
              text: 'Hint text for this item',
              position: 'above',
            },
            value: 'value-3',
            selected: groupSelected === 'radio-3',
            conditional: {
              inputId: 'group-input-3',
              name: 'group-input-3',
              label: 'group input 3',
              type: 'text',
              value: inputFieldGroupValues['group-input-3'],
            },
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
        onChange={handleGroupConditionalChange}
      />
      <br />
    </>
  );
};
