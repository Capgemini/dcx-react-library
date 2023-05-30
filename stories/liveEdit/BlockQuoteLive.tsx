import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Blockquote } from '../../src/blockquote/Blockquote';

const BlockquoteDemo = `
function BlockquoteDemo() {
    const style = {
    color:'red'
    }
    return (
    <Blockquote 
        className="blockquote-reverse"
        text="This is the content of the blockquote."
        footer="From WWF's websit"
        props={{ id: 'my-blockquote', style }} 
    />
    )
}
`.trim();

const BlockquoteLive = () => {
    const scope = { Blockquote };
    return (
    <LiveProvider code={BlockquoteDemo} scope={scope}>
        <div className="container">
            <LiveEditor className="liveEditor" aria-label="editor" />
            <LivePreview className="livePreview" aria-label="preview" />
        </div>
        <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
    );
};

export default BlockquoteLive;
