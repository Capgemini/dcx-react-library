import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Link } from '../../src/link/Link';

const LinkDemo = `
function LinkDemo() {
    const link = "https://www.google.com/"
    return (
        <Link
            value="Google" to={link} props={{}}
        />
    )
}
`.trim();

const LinkLive = () => {
  const scope = { Link };
  return (
    <LiveProvider code={LinkDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default LinkLive;
