import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { BlockQuote } from '../../src/blockquote/BlockQuote';

const BlockQuoteDemo = `
function BlockQuote() {
    const style = {
    color:'red'
    }
    return (
    <Paragraph 
        className="govuk-body"
        value="This is the content of the blockquote."
        props={{ id: 'my-paragraph', style }}
    />
    )
}
`.trim();

const BlockQuoteLive = () => {
    const scope = { BlockQuote };
    return (
    <LiveProvider code={BlockQuoteDemo} scope={scope}>
        <div className="container">
        <LiveEditor className="liveEditor" aria-label="editor" />
        <LivePreview className="livePreview" aria-label="preview" />
        </div>
        <LiveError className="liveError" aria-label="error" />
    </LiveProvider>
    );
};

export default BlockQuoteLive;
