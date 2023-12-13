import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormCheckbox } from '../../src/formCheckbox/FormCheckbox';

const FormCheckboxDemo = `
function FormCheckboxDemo() {
   
  const [value, setValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [isError, setIsError] = React.useState(false)
  const handleChange = (event, conditional) => {
    if (conditional) {
      console.log(conditional);
      return;
    }
    setValue(event.currentTarget.value);
    setChecked(event.currentTarget.checked);

    setIsError(event.currentTarget.checked && event.currentTarget.value === '');

  };
  return (
    <FormCheckbox
      name="checkbox-1"
      label=<>This is a custom label <a href="#">hello</a></>
      value={value}
      onChange={handleChange}
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
      hint={{
        text: "",
        className: "",
        id: "",
        position: "below"
      }}
      conditional={{
        value: "",
        name: "",
        label: "",
        type: 'text',
        className: "",
        groupClassName: "",
        id: "conditional-1",
        inputClassName: "",
        inputId: "",
        labelClassName: "",
        position: ""
      }}
      selected={checked}
      nested={false}
      isError={isError}
      inputClassName="inputClassName"
      labelClassName="labelClassName"
      itemClassName="itemClassName"
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
