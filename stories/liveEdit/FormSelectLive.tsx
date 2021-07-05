import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormSelect } from '../../src/formSelect/FormSelect';
import './style.css';

const FormSelectDemo = `
function FormSelectDemo() {
  const [value, setValue] = React.useState('')
  const handleChange = event => {
    setValue(event.currentTarget.value);
  }
  return (
    <FormSelect
      nullOption="Select..."
      label="Basic"
      labelProps={{
        style: {
          display: 'block',
          marginBottom: '5px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      }}
      onChange={handleChange}
      options={[
        { label: 'option1', value: 'value1', ariaLabel: 'option1', id: 'id1', selected: true },
        { label: 'option2', value: 'value2', className: 'option2', labelClassName: 'label-class' },
        { label: 'option3', value: 'value3', disabled: true },
      ]}
      optionGroups={[]}
      className=""
      id="select"
      ariaLabel=""
      labelProps={{}}
      hint={{
        text: "",
        className: "",
        id: ""
      }}
      error={{
        text: "",
        className: "",
        id: "",
        visuallyHiddenText: {
          text: "",
          className: "",
        }
      }}
      style={{}}
    />
  );
}
`.trim();

const FormSelectLive = () => {
  const scope = { FormSelect };
  return (
    <LiveProvider code={FormSelectDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormSelectLive;
