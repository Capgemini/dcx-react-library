import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormGroup } from '../../src/formGroup/FormGroup';
import './style.css';

const FormGroupDemo = `
function FormGroupDemo() {
  return (
    <FormGroup
    name="name-of-group"
    type="radio"
    items={[
      {
        label: 'item-label',
        value: 'yes',
      },
      {
        label: 'item-label',
        value: 'no',
      },
    ]}
    ariaDescribedBy=""
    error={{
      text: "",
      className: "",
      id: "",
      visuallyHiddenText: ""
    }}
    fieldsetClasses=""
    groupClasses=""
    hint={{
      id: "",
      text: "",
      className: ""
    }}
    id=""
    inputProps={{}}
    itemProps={{}}
    itemsClasses=""
    labelProps={{}}
    legend={{
      text: "Heading text",
      className: "",
      heading: {
        priority: "2",
        className: ""
      }
    }}
  />
  );
}
`.trim();

const FormGroupLive = () => {
  const scope = { FormGroup };
  return (
    <LiveProvider code={FormGroupDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormGroupLive;
