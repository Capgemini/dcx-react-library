import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormRadio } from '../../src/formRadio/FormRadio';
import './style.css';

const FormRadioDemo = `
function FormRadioDemo() {
  const [value, setValue] = React.useState('');
  const handleChange = event => {
    setValue(event.currentTarget.value);
  }
  return (
    <>
      <FormRadio
        label="text example"
        name="group1"
        value="value"
        id="radio-1"
        onChange={handleChange}
        ariaLabel=""
        ariaDataControls=""
        ariaDescribedBy=""
        ariaLabelledBy=""
        disabled={false}
        conditional={{
          name: "",
          label: "",
          type: 'text',
          className: "",
          groupClassName: "",
          id: "conditional-id",
          inputClassName: "",
          inputId: "",
          labelClassName: "",
        }}
        hint={{
          text: "",
          className: "",
          id: ""
        }}
        inputProps={{}}
        itemProps={{}}
        labelProps={{}}
        selected={value === 'value'}
      />
      <FormRadio
        label="text example two"
        name="group1"
        value="value-two"
        id="radio-2"
        onChange={handleChange}
        ariaLabel=""
        ariaDataControls=""
        ariaDescribedBy=""
        ariaLabelledBy=""
        disabled={false}
        hint={{
          text: "",
          className: "",
          id: ""
        }}
        inputProps={{}}
        itemProps={{}}
        labelProps={{}}
        selected={value === 'value-two'}
      />
    </>
  );
}
`.trim();

const FormRadioLive = () => {
  const scope = { FormRadio };
  return (
    <LiveProvider code={FormRadioDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormRadioLive;
