import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Heading } from '../../src/heading/Heading';

const HeadingDemo = `
function HeadingDemo() {

  return (
    <Heading 
        level="h1"
        label="This is a Level 1 Heading"
        className="govuk-body"
        props={{ role: 'heading' }}
    />
  )
}
`.trim();

const HeadingLive = () => {
    const scope = { Heading };
    return (
        <LiveProvider code={HeadingDemo} scope={scope}>
            <div className="container">
                <LiveEditor className="liveEditor" aria-label="editor" />
                <LivePreview className="livePreview" aria-label="preview" />
            </div>
            <LiveError className="liveError" aria-label="error" />
        </LiveProvider>
    );
};

export default HeadingLive;