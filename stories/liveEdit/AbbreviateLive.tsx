import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Abbreviate } from '../../src/abbreviate/Abbreviate';

const AbbreviateDemo = `
function AbbreviateDemo() {
    const style = {
    color:'red'
    }
    return (
    <Abbreviate 
        className="abbreviate-reverse"
        value="WHO"
        title="World Health Organization"
        props={{ id: 'my-abbreviate', style }} 
    />
    )
}
`.trim();

const AbbreviateLive = () => {
    const scope = { Abbreviate };
    return (
    <LiveProvider code={AbbreviateDemo} scope={scope}>
        <div className="container">
            <LiveEditor className="liveEditor" aria-label="editor" />
            <LivePreview className="livePreview" aria-label="preview" />
        </div>
        <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
    );
};

export default AbbreviateLive;
