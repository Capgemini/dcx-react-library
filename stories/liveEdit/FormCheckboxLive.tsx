import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormCheckbox } from '../../src/formCheckbox/FormCheckbox';
import './style.css';

const FormCheckboxDemo = `
function FormCheckboxDemo() {
   
  const [value, setValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const handleChange = event => {
    setValue(event.currentTarget.value);
    setChecked(!checked);
  };
  return (
    <FormCheckbox
      label="checkbox label"
      value={value}
      name=""
      id="checkbox-1"
      inputProps={{
        name: 'checkbox-1',
      }}
      itemProps={{}}
      labelProps={{}}
      ariaLabel=""
      ariaDataControls=""
      ariaDescribedBy=""
      ariaLabelledBy=""
      disabled={false}
      hint=""
      hintPosition="below"
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
      onChange={handleChange}
      defaultChecked={checked}
    />
  );
}
`.trim();

const FormCheckboxLive = () => {
  const scope = { FormCheckbox };
  return (
    <LiveProvider code={FormCheckboxDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormCheckboxLive;
