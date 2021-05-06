import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FormInputMasked } from '../../src/formInput/FormInputMasked';
import './style.css';

const FormInputMaskedDemo = `
function FormInputMaskedDemo() {
  const [value, setValue] = React.useState('');
  const handleChange = event => {console.log};
  return (
    <FormInputMasked
    options={{
      mask: '£num',
      blocks: {
        num: {
          // nested masks are available!
          mask: Number,
          thousandsSeparator: ' ',
        },
      },
    }}
    value={value}
    onChange={handleChange}
    type="text"
    name="maskInput"
    props={{}}
    ariaLabel=""
  />
  );
}
`.trim();

const FormInputMaskedLive = () => {
  const scope = { FormInputMasked };
  return (
    <LiveProvider code={FormInputMaskedDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default FormInputMaskedLive;
