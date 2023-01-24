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
      id="select"
      nullOption="Select..."
      containerProps={containerProps}
      value=""
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
      //If you need a more advanced control of options use the following:
      //options={[
      //  { 
      //    label: 'option1', 
      //    value: 'value1', 
      //    ariaLabel: 'option1', 
      //    id: 'id1' 
      //  },
      //]},
      options={['option1','option2', 'option3']}
      optionGroups={[]}
      selectClassName=""
      labelClassName=""
      containerClassName=""
      style={{}}
      
      ariaLabel=""
      labelProps={{}}
      hint={{
        text: "",
        className: "",
        id: ""
      }}
      // you can also use the compact version of "error"
      errorMessage=""
      errorMessageClassName=""
      errorMessageVisuallyHidden={{
        text: "",
        className: "",
      }}
      errorMessageId=""
      defaultValue=""
      tabIndex={0}
      containerErrorClassName="containerErrorClassName"
      containerFilledClassName="containerFilledClassName"
      variant="floating"
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
