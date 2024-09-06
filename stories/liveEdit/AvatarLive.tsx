import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Avatar } from '../../src/avatar/Avatar';

const AvatarDemo = `
function AvatarDemo() {
   
  const style = {
    border: '1px solid black'
  }

  return (
    <Avatar style={style}>JB</Avatar>
  )
}
`.trim();

const AvatarLive = () => {
  const scope = { Avatar };
  return (
    <LiveProvider code={AvatarDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default AvatarLive;
