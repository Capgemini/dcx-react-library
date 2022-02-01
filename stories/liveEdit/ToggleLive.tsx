import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Toggle } from '../../src/toggle/Toggle';
import './style.css';

const ToggleDemo = `
function ToggleDemo() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (checked, evt) => {
    setChecked(checked);
    console.log(evt);
  }
  return (
    <Toggle
      checked={checked}
      onChange={handleChange}
      onColor="green"
      offColor="gray"
      borderRadius="34px"
      disabled={false}
      customOnLabel={<></>}
      customOffLabel={<></>}
      inputProps={{
        id: 'test'
      }}
    />
  );
}
`.trim();

const ToggleLive = () => {
  const scope = { Toggle };
  return (
    <LiveProvider code={ToggleDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ToggleLive;
