import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormDate } from '../../src/formDate/FormDate';
import './style.css';

const FormDateDemo = `
function FormDateDemo() {
  const [isValid, setIsValid] = React.useState(false);
  const [date, setDate] = React.useState(0);
  const handleValidity = (valid, date) => {
    setIsValid(valid);
    setDate(date);
  };
  return (
    <div>
      <FormDate
        dateFormat="dd/mm/yyyy"
        handleValidity={(v, d) => handleValidity(v, d)}
        inputContainerClass=""
        inputClass=""
        yearProps={{
          label: "",
          classNameInput: "",
          classNameLabel: "",
          classNameSpan: "",
          customLabel: <></>,
          tabIndex: 0
        }}
        monthProps={{
          label: "",
          classNameInput: "",
          classNameLabel: "",
          classNameSpan: "",
          customLabel: <></>,
          tabIndex: 0
        }}
        dayProps={{
          label: "",
          classNameInput: "",
          classNameLabel: "",
          classNameSpan: "",
          customLabel: <></>,
          tabIndex: 0
        }}
        displayError={false}
        errorMessage=""
        errorPosition="bottom"
        errorClass=""
        day=""
        month=""
        year=""
        disabled={false}
      />
      <pre>isValid: {isValid.toString()}</pre>
      <pre>date: {JSON.stringify(new Date(date))}</pre>
    </div>
  );
}
`.trim();

const FormDateLive = () => {
  const scope = { FormDate };
  return (
    <LiveProvider code={FormDateDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormDateLive;
