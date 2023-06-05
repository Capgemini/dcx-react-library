import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CodeSnippet } from '../../src/codesnippet/CodeSnippet';

const CodeSnippetDemo = `
function CodeSnippetDemo() {
    const style = {
    color:'red'
    }
    return (
    <CodeSnippet 
        className="code"
        value="This is the content of the code snippet."
        props={{ id: 'my-code', style }} 
    />
    )
}
`.trim();

const CodeSnippetLive = () => {
    const scope = { CodeSnippet };
    return (
    <LiveProvider code={CodeSnippetDemo} scope={scope}>
        <div className="container">
            <LiveEditor className="liveEditor" aria-label="editor" />
            <LivePreview className="livePreview" aria-label="preview" />
        </div>
        <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
    );
};

export default CodeSnippetLive;
