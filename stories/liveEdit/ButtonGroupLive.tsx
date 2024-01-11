import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from '../../src/button/Button';
import { ButtonGroup } from '../../src/buttonGroup/ButtonGroup';

const ButtonGroupDemo = `
function ButtonGroupDemo() {

  return (
    <>
        <ButtonGroup buttonVariant="primary" layout="horizontal">
            <Button label="Button 1" />
            <Button label="Button 2" />
            <Button label="Button 3" />
        </ButtonGroup>
    </>
  )
}
`.trim();

const ButtonGroupLive = () => {
  const scope = { ButtonGroup, Button };
  return (
    <LiveProvider code={ButtonGroupDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ButtonGroupLive;
