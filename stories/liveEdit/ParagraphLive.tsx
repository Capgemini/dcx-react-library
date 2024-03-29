import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Paragraph } from '../../src/paragraph/Paragraph';

const ParagraphDemo = `
function ParagraphDemo() {
  const style = {
    color:'red'
  }
  return (
    <Paragraph 
        className="govuk-body"
        value="This is the content of the paragraph."
        props={{ id: 'my-paragraph', style }}
    />
  )
}
`.trim();

const ParagraphLive = () => {
  const scope = { Paragraph };
  return (
    <LiveProvider code={ParagraphDemo} scope={scope}>
      <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
      </div>
      <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
  );
};

export default ParagraphLive;
