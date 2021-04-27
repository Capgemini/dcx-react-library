import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Button } from '../../src/button/Button';
import React from 'react';
import './style.css';
const MyDemoButton = ({ label, disabled }: any) => {
  const handleClick = () => {
    console.log('hello');
  };
  return <Button label={label} disabled={disabled} onClick={handleClick} />;
};
const ButtonLive = () => {
  const buttonProps = {
    label: 'test',
  };
  const scope = { MyDemoButton, buttonProps };
  const code = `<MyDemoButton label="yooo" />`;
  return (
    <LiveProvider code={code} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" />
        <LivePreview className="livePreview" />
      </div>
      <LiveError className="liveError" />
    </LiveProvider>
  );
};

export default ButtonLive;
