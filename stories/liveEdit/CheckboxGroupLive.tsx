import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CheckboxGroup } from '../../src/checkboxGroup/CheckboxGroup';
import './style.css';

const CheckboxGroupDemo = `
function CheckboxGroupDemo() {
  const [value, setValue] = React.useState('');
  const handleChange = (event, conditional) => {
    setValue(event.currentTarget.value);
  }
  
  return (
    <CheckboxGroup
    name="name-of-group"
    items={[
      {
        label: 'item-label',
        value: 'yes',
        id: 'radio-1',
        conditional: {
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
        },
        hint:{
          text: "",
          className: "",
          id: "",
          position: "above"
        }
      },
      {
        label: 'item-label',
        value: 'no',
        id: 'radio-2',
        conditional: {
          value: "",
          name: "",
          label: "",
          type: 'text',
          className: "",
          groupClassName: "",
          id: "conditional-2",
          inputClassName: "",
          inputId: "",
          labelClassName: "",
        },
        hint:{
          text: "",
          className: "",
          id: "",
          position: "above"
        }
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
    inputClassName=""
    itemClassName=""
    labelClassName=""
    legend={{
      text: "Heading text",
      className: "",
      heading: {
        priority: "2",
        className: ""
      }
    }}
    onChange={handleChange}
  />
  );
}
`.trim();

const CheckboxGroupLive = () => {
  const scope = { CheckboxGroup };
  return (
    <LiveProvider code={CheckboxGroupDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default CheckboxGroupLive;
